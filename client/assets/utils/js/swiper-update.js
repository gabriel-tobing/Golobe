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

const swiper = new Swiper(".swiper-update", {
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