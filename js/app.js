// ---NAV---
/* open/close nav buttons */
const openBTN = document.querySelector(".openbtn");
const closeBTN = document.querySelector(".closebtn");

openBTN.addEventListener("click", () => {
    document.getElementById("mySidepanel").style.width = "220px";
});

closeBTN.addEventListener("click", () => {
    document.getElementById("mySidepanel").style.width = "0";
});

// ---PRODUCT CARDS---
import { apiCall } from "./productAPI.js";
const gallery = document.querySelector(".gallery");
const more = document.querySelector(".more");

// used to keep track of the latest product rendered from array
var renderedCard = 0;

// gets data from spoofed api - originally from backend API
function getData() {
    return apiCall;
}

// renders 6 product cards at a time from api fetch
async function generateProductCards() {
    const data = await getData();
    for (let i = renderedCard; i < renderedCard + 6; i++) {
        const productCard = document.createElement("div");
        productCard.classList.add("gallery-img");
        productCard.innerHTML = `
                  <div class="card">
                    <img src=${data[0][i].image} alt=${
            data[0][i].product_name
        }></img>
                    <div class="card-text">
                      <h4><b>${data[0][i].product_name}</b></h4>
                      <p>£${data[0][i].price.toFixed(2)}</p>
                    </div>
                  </div> 
                  `;
        gallery.appendChild(productCard);
    }
    console.log(renderedCard);
    if (renderedCard >= 6) {
        more.style.display = "none";
    }
    renderedCard += 6;
}

generateProductCards();

more.addEventListener("click", () => {
    generateProductCards();
});
