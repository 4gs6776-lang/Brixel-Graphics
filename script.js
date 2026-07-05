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
// ===========================
// PRELOADER
// ===========================

window.addEventListener("load", function () {

    setTimeout(function () {
        document.getElementById("preloader").classList.add("hide");
    }, 1000);

});
// ===========================
// ANIMATED COUNTERS
// ===========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            let count = 0;

            const updateCounter = () => {

                const increment = Math.ceil(target / 100);

                if(count < target){
                    count += increment;
                    counter.innerText = count;
                    setTimeout(updateCounter, 20);
                }else{
                    counter.innerText = target + "+";
                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {
    counterObserver.observe(counter);
});