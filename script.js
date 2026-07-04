// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});

// Fade in sections on scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// Change header background when scrolling

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background = "#0b1120";

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.4)";

    }else{

        header.style.background = "#111827";

        header.style.boxShadow = "none";

    }

});

// Hero button animation

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.05)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});

// Portfolio hover effect

const gallery = document.querySelectorAll(".gallery-item");

gallery.forEach(item=>{

    item.addEventListener("click",()=>{

        alert("Portfolio image will be displayed here.");

    });

});

// Footer year update

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    "&copy; " +
    new Date().getFullYear() +
    " Brixel Graphics. All Rights Reserved.";

}