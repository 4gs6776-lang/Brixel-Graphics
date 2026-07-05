const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

console.log("JavaScript Loaded");

menuToggle.addEventListener("click", () => {
    console.log("Menu clicked");
    navMenu.classList.toggle("active");
});