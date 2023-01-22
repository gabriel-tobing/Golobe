/* Script Show and Hide Password */

const passwordInputEls = document.querySelectorAll("#password");
const buttonInputEls = document.querySelectorAll("#show-hide");
const iconButtonEls = document.querySelectorAll(".button-icon");

for(let i = 0; i < buttonInputEls.length; i++) {
    buttonInputEls[i].addEventListener("click", () => {
        if(passwordInputEls[i].type == "password") {
            passwordInputEls[i].type = "text";
            buttonInputEls[i].innerHTML = "<span class='iconify button-icon' data-icon='mdi:eye'></span>";
        } else {
            passwordInputEls[i].type = "password";
            buttonInputEls[i].innerHTML = "<span class='iconify button-icon' data-icon='mdi:eye-off'></span>";
        }

        passwordInputEls[i].focus();
    });
}



/* Script Swiper JS */

const swiper = new Swiper(".swiper-register", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
});



/* Script Previous and Next Button */

const formRegister = document.querySelector("#register")
const formPayment = document.querySelector("#payment")
const nextButton = document.querySelector(".register-button");
const previousButton = document.querySelector(".back-button");
const paymentButton = document.querySelector("#payment-button");
const emailEl = document.querySelector("#email-address");

nextButton.addEventListener("click", () => {
    formRegister.classList.remove("active");
    formPayment.classList.add("active");
});

previousButton.addEventListener("click", () => {
    formPayment.classList.remove("active");
    formRegister.classList.add("active");
});