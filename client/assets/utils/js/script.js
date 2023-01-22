/* Script Navbar */

const navbarEl = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    navbarEl.classList.toggle("scroll", window.scrollY > 0);
});



/* Script Choose Search */

const hotelButton = document.getElementById("hotel-button");
const hotelSearch = document.getElementById("hotel-search");
const flightButton = document.getElementById("flight-button");
const flightSearch = document.getElementById("flight-search");

hotelButton.addEventListener("click", () => {
    flightSearch.style.display = "none";
    flightButton.classList.remove("active");

    hotelButton.classList.add("active");
    hotelSearch.style.display = "block";
});

if(flightButton.classList.contains("active")) {
    flightButton.addEventListener("click", () => {
        flightButton.classList.add("active");
        flightSearch.style.display = "block";

        hotelButton.classList.remove("active");
        hotelSearch.style.display = "none";
    });
} else {
    flightButton.classList.add("active");
    flightSearch.style.display = "block";

    hotelButton.classList.remove("active");
    hotelSearch.style.display = "none";
}



/* Script Sort Ticket */

const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
const range = document.querySelector(".slider .progress");

const priceGap = 100;

rangeInput.forEach((input) =>{
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});