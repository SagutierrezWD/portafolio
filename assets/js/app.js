const menuIcon = document.querySelector("#menu-icon");
const navMenu = document.querySelector(".nav__list")
const navLinks = document.querySelectorAll(".nav__link");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    console.log("Ejecutado por un menu-link")
});

console.log(navLinks);

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});