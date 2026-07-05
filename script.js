const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {

    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    } else {
        navMenu.classList.add("active");
        menuToggle.textContent = "✕";
    }

});
// ===========================
// LIGHTBOX
// ===========================

function openImage(imageSrc){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = imageSrc;
}

function closeImage(){
    document.getElementById("lightbox").style.display = "none";
}