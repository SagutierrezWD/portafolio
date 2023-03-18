const menuIcon = document.querySelector("#menu-icon");
const navMenu = document.querySelector(".nav__list")
const navLinks = document.querySelectorAll(".nav__link");
const btnMode = document.querySelector("#btn-mode");
const iconMoon = document.querySelector(".bx-moon");
const iconSun = document.querySelector(".bx-sun");
const body = document.querySelector("body");


btnMode.addEventListener("click", () => {
    // Cambiando color al boton
    btnMode.classList.toggle("dark")
    btnMode.classList.toggle("light");

    // Alternando clase dark a body
    body.classList.toggle("dark");

    
    setTimeout(() => {
        // Moviendo iconos del boton
        iconMoon.classList.toggle("icon-down");
        iconSun.classList.toggle("icon-up");
    }, 300)
});

// Alternando menu movil activo
menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Alternando menu movil activo al darle click a las opciones dle menu
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});