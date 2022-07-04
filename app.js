const gallery = document.querySelector(".gallery");
const more = document.querySelector(".more");

// used to keep track of the latest product rendered from array
var renderedCard = 0;

// gets data from api
async function getData() {
    const dataFetch = await fetch(
        "https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products"
    );
    const data = await dataFetch.json();
    return data;
}

// renders 6 product cards at a time from api fetch
async function generateProductCards() {
    const data = await getData();
    for (let i = renderedCard; i < renderedCard + 6; i++) {
        try {
            const productCard = document.createElement("div");
            productCard.classList.add("gallery-img");
            productCard.innerHTML = `
                  <div class="card">
                    <img src=${data[0][i].image} alt=${data[0][i].product_name}></img>
                    <div class="card-text">
                      <h4><b>${data[0][i].product_name}</b></h4>
                      <p>£${data[0][i].price.toFixed(2)}</p>
                    </div>
                  </div> 
                  `;
            gallery.appendChild(productCard);
        } catch (error) {
            more.style.display = "none";
        }
    }
    renderedCard += 6;
}

generateProductCards();

more.addEventListener("click", () => {
    generateProductCards();
});




/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "210px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
