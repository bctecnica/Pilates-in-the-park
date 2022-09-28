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
                      <h4>${data[0][i].product_name}</h4>
                      <p>£${data[0][i].price.toFixed(2)}</p>
                      <h6 class="add-btn">Add To Cart</h6>
                    </div>
                  </div> 
                  `;
        gallery.appendChild(productCard);
    }
    if (renderedCard >= 6) {
        more.style.display = "none";
    }
    renderedCard += 6;

    addToCartListener();
}

generateProductCards();

more.addEventListener("click", () => {
    generateProductCards();
});

// Adds add to cart click listeners to all rendered cards
var popup = document.getElementById("cart-popup");

function addToCartListener() {
    const addBtn = document.querySelectorAll(".add-btn");
    addBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            console.log("clicked");
            popup.className = "show";
            setTimeout(function () {
                popup.className = popup.className.replace("show", "");
            }, 4500);
        });
    });
}
