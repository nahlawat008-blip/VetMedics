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

// ================= VACCINATION PACKAGES =================

function openVaccinationPackages() {

    const modal = document.getElementById("vaccinationPackages");

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closeVaccinationPackages() {

    const modal = document.getElementById("vaccinationPackages");

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}


// ================= PACKAGE DETAILS =================

function showPackageDetails(packageType) {

    const detailModal = document.getElementById("packageDetails");

    const content = document.getElementById("packageDetailContent");

    let html = "";


    if (packageType === "puppy") {

        html = `
            <h2>🐶 Puppy Vaccination Package</h2>

            <h3>Package Includes</h3>

            <ul>
                <li>Core puppy vaccination schedule</li>
                <li>Age-wise vaccination guidance</li>
                <li>Veterinary consultation</li>
                <li>Vaccination record update</li>
                <li>Follow-up vaccination reminder</li>
            </ul>

            <h3>Recommended For</h3>

            <p>
                Puppies requiring their initial vaccination series.
            </p>

            <div class="package-price">
                Starting from ₹____
            </div>

            <a href="#appointment"
               class="book-package-btn"
               onclick="closePackageDetails()">
                Book This Package
            </a>
        `;

    }


    else if (packageType === "adultDog") {

        html = `
            <h2>🐕 Adult Dog Vaccination Package</h2>

            <h3>Package Includes</h3>

            <ul>
                <li>Annual vaccination consultation</li>
                <li>Required booster vaccination</li>
                <li>Veterinary health assessment</li>
                <li>Vaccination record update</li>
                <li>Next due-date reminder</li>
            </ul>

            <h3>Recommended For</h3>

            <p>
                Adult dogs requiring regular booster vaccination.
            </p>

            <div class="package-price">
                Starting from ₹____
            </div>

            <a href="#appointment"
               class="book-package-btn"
               onclick="closePackageDetails()">
                Book This Package
            </a>
        `;

    }


    else if (packageType === "kitten") {

        html = `
            <h2>🐱 Kitten Vaccination Package</h2>

            <h3>Package Includes</h3>

            <ul>
                <li>Kitten vaccination schedule</li>
                <li>Age-wise vaccination guidance</li>
                <li>Veterinary consultation</li>
                <li>Vaccination record update</li>
                <li>Follow-up reminder</li>
            </ul>

            <h3>Recommended For</h3>

            <p>
                Kittens requiring their initial vaccination series.
            </p>

            <div class="package-price">
                Starting from ₹____
            </div>

            <a href="#appointment"
               class="book-package-btn"
               onclick="closePackageDetails()">
                Book This Package
            </a>
        `;

    }


    else if (packageType === "adultCat") {

        html = `
            <h2>🐈 Adult Cat Vaccination Package</h2>

            <h3>Package Includes</h3>

            <ul>
                <li>Annual vaccination consultation</li>
                <li>Required booster vaccination</li>
                <li>Veterinary health assessment</li>
                <li>Vaccination record update</li>
                <li>Next due-date reminder</li>
            </ul>

            <h3>Recommended For</h3>

            <p>
                Adult cats requiring regular vaccination and boosters.
            </p>

            <div class="package-price">
                Starting from ₹____
            </div>

            <a href="#appointment"
               class="book-package-btn"
               onclick="closePackageDetails()">
                Book This Package
            </a>
        `;

    }


    content.innerHTML = html;

    detailModal.style.display = "flex";

}


function closePackageDetails() {

    const modal = document.getElementById("packageDetails");

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}


// Close when clicking outside the box

document.getElementById("vaccinationPackages").addEventListener("click", function(e) {

    if (e.target === this) {
        closeVaccinationPackages();
    }

});


document.getElementById("packageDetails").addEventListener("click", function(e) {

    if (e.target === this) {
        closePackageDetails();
    }

});

// ================================
// TELECONSULTATION
// ================================

function openTeleconsultation() {
    document.getElementById("teleconsultationModal").style.display = "flex";
}

function closeTeleconsultation() {
    document.getElementById("teleconsultationModal").style.display = "none";
}

function closeTeleDetails() {
    document.getElementById("teleDetailsModal").style.display = "none";
}


function showTeleDetails(type) {

    const details = document.getElementById("teleDetails");

    if (type === "video") {

        details.innerHTML = `
            <div class="details-icon">
                <i class="fas fa-video"></i>
            </div>

            <h2>Video Consultation</h2>

            <p>
                Get veterinary consultation through a live video call.
                Our veterinarian can discuss your pet's symptoms,
                medical history and provide appropriate guidance.
            </p>

            <h4>Suitable for:</h4>

            <ul>
                <li>General health concerns</li>
                <li>Skin and minor health problems</li>
                <li>Diet and nutrition advice</li>
                <li>Post-treatment guidance</li>
            </ul>

            <div class="details-price">
                Price: ₹—
            </div>
        `;

    }


    else if (type === "phone") {

        details.innerHTML = `
            <div class="details-icon">
                <i class="fas fa-phone"></i>
            </div>

            <h2>Phone Consultation</h2>

            <p>
                Talk directly with our veterinarian over a phone call
                and get professional advice regarding your pet's health.
            </p>

            <h4>Suitable for:</h4>

            <ul>
                <li>General veterinary advice</li>
                <li>Medication guidance</li>
                <li>Diet and care advice</li>
                <li>Initial assessment of health concerns</li>
            </ul>

            <div class="details-price">
                Price: ₹—
            </div>
        `;

    }


    else if (type === "followup") {

        details.innerHTML = `
            <div class="details-icon">
                <i class="fas fa-sync-alt"></i>
            </div>

            <h2>Follow-up Consultation</h2>

            <p>
                Continue your pet's treatment and monitor recovery
                with a follow-up consultation from our veterinarian.
            </p>

            <h4>Suitable for:</h4>

            <ul>
                <li>Monitoring treatment progress</li>
                <li>Post-treatment follow-up</li>
                <li>Review of previously discussed problems</li>
                <li>Further care and medication guidance</li>
            </ul>

            <div class="details-price">
                Price: ₹—
            </div>
        `;

    }

    document.getElementById("teleDetailsModal").style.display = "flex";
}


// Close when clicking outside modal
window.addEventListener("click", function(event) {

    const teleModal =
        document.getElementById("teleconsultationModal");

    const detailsModal =
        document.getElementById("teleDetailsModal");

    if (event.target === teleModal) {
        closeTeleconsultation();
    }

    if (event.target === detailsModal) {
        closeTeleDetails();
    }

});
