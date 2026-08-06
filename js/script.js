// =========================
// Vet Medics Pet Clinic
// script.js
// =========================

// Smooth scroll for menu links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade animation on scroll
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease";
});

// Floating WhatsApp Button
const whatsapp = document.createElement("a");
whatsapp.href = "https://wa.me/919817040859";
whatsapp.target = "_blank";
whatsapp.innerHTML = "💬";
whatsapp.className = "floating-whatsapp";

document.body.appendChild(whatsapp);

// Back To Top Button
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.className = "top-btn";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const searchInput = document.getElementById("searchInput");

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keydown", function(e){

    if(e.key !== "Enter") return;

    e.preventDefault();

    const value = this.value.trim().toLowerCase();

    if(value === "services"){
        document.getElementById("services").scrollIntoView({behavior:"smooth"});
    }
    else if(value === "about"){
        document.getElementById("about").scrollIntoView({behavior:"smooth"});
    }
    else if(value === "gallery"){
        document.getElementById("gallery").scrollIntoView({behavior:"smooth"});
    }
    else if(value === "contact"){
        document.getElementById("contact").scrollIntoView({behavior:"smooth"});
    }
    else{
        alert("Search result not found");
    }

});

    }

});
