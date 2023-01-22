/* Script Show and Hide Password */

const codeInputEl = document.getElementById("code");
const buttonInputEl = document.getElementById("show-hide");

buttonInputEl.addEventListener("click", () => {
    if(codeInputEl.type == "password") {
        codeInputEl.type = "text";
        buttonInputEl.innerHTML = "<span class='iconify button-icon' data-icon='mdi:eye'></span>";
    } else {
        codeInputEl.type = "password";
        buttonInputEl.innerHTML = "<span class='iconify button-icon' data-icon='mdi:eye-off'></span>";
    }

    codeInputEl.focus();
});




/* Script Swiper JS */

const swiper = new Swiper(".swiper-verify", {
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