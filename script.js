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
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = imageSrc;
}

function closeImage(){
    document.getElementById("lightbox").style.display = "none";
}
// Close when clicking outside the image
document.getElementById("lightbox").addEventListener("click", function(e){

    if(e.target.id === "lightbox"){
        closeImage();
    }

});
// ===========================
// SCROLL ANIMATION
// ===========================

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

fadeElements.forEach(element => {
    observer.observe(element);
});
// ===========================
// BACK TO TOP BUTTON
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
        topBtn.style.justifyContent = "center";
        topBtn.style.alignItems = "center";
    } else {
        topBtn.style.display = "none";
    }

});
