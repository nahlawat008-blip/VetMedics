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

// ================= SEARCH SERVICES =================

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const serviceCards = document.querySelectorAll('.service-card');

function searchServices() {

    const value = searchInput.value.trim().toLowerCase();

    let found = 0;

    serviceCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (value === '' || text.includes(value)) {
            card.style.display = '';
            found++;
        } else {
            card.style.display = 'none';
        }

    });

    let noResult = document.getElementById('noSearchResult');

    if (!noResult) {

        noResult = document.createElement('p');

        noResult.id = 'noSearchResult';

        noResult.textContent =
            'No matching service found. Try Vaccination, Grooming or Surgery.';

        noResult.style.cssText =
            'display:none;text-align:center;margin:25px 0;color:#666;font-weight:500;';

        document.querySelector('.service-grid').after(noResult);
    }

    if (value !== '' && found === 0) {
        noResult.style.display = 'block';
    } else {
        noResult.style.display = 'none';
    }

    if (value !== '') {
        document.getElementById('services').scrollIntoView({
            behavior: 'smooth'
        });
    }
}

if (searchBtn) {
    searchBtn.addEventListener('click', searchServices);
}

if (searchInput) {

    searchInput.addEventListener('input', searchServices);

    searchInput.addEventListener('keydown', function(e) {

        if (e.key === 'Enter') {
            searchServices();
        }

    });
}


    }

});
