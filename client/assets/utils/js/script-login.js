/* Script Show and Hide Password */

const passwordInputEl = document.getElementById("password");
const buttonInputEl = document.getElementById("show-hide");

buttonInputEl.addEventListener("click", () => {
    if(passwordInputEl.type == "password") {
        passwordInputEl.type = "text";
        buttonInputEl.innerHTML = "<span class='iconify button-icon' data-icon='mdi:eye'></span>";
    } else {
        passwordInputEl.type = "password";
        buttonInputEl.innerHTML = "<span class='iconify button-icon' data-icon='mdi:eye-off'></span>";
    }

    passwordInputEl.focus();
});



/* Script Swiper JS */

const swiper = new Swiper(".swiper-login", {
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