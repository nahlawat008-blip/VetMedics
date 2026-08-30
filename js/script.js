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

// ================= TELECONSULTATION PACKAGES =================

function openTeleconsultationPackages() {

    const modal = document.getElementById("teleconsultationPackages");

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closeTeleconsultationPackages() {

    const modal = document.getElementById("teleconsultationPackages");

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}


// ================= TELECONSULTATION DETAILS =================

function showTeleconsultationDetails(type) {

    const detailModal =
        document.getElementById("teleconsultationDetails");

    const content =
        document.getElementById("teleconsultationDetailContent");

    let html = "";


    if (type === "video") {

        html = `
            <h2>📹 Video Consultation</h2>

            <h3>Consultation Includes</h3>

            <ul>
                <li>Live video consultation with veterinarian</li>
                <li>Discussion of your pet's symptoms</li>
                <li>Basic health guidance</li>
                <li>Medication and care guidance</li>
                <li>Further treatment advice if required</li>
            </ul>

            <h3>Recommended For</h3>

            <p>
                Pet owners who want to discuss their pet's health
                with a veterinarian through a video call.
            </p>

            <div class="package-price">
                Price: ₹____
            </div>
        `;

    }


    else if (type === "phone") {

        html = `
            <h2>📞 Phone Consultation</h2>

            <h3>Consultation Includes</h3>

            <ul>
                <li>Direct phone consultation with veterinarian</li>
                <li>Discussion of health concerns</li>
                <li>General veterinary advice</li>
                <li>Medication and care guidance</li>
                <li>Further treatment advice if required</li>
            </ul>

            <h3>Recommended For</h3>

            <p>
                Pet owners who prefer a convenient veterinary
                consultation over the phone.
            </p>

            <div class="package-price">
                Price: ₹____
            </div>
        `;

    }


    else if (type === "followup") {

        html = `
            <h2>🔄 Follow-up Consultation</h2>

            <h3>Consultation Includes</h3>

            <ul>
                <li>Follow-up with the veterinarian</li>
                <li>Review of treatment progress</li>
                <li>Discussion of recovery</li>
                <li>Medication guidance</li>
                <li>Further care recommendations</li>
            </ul>

            <h3>Recommended For</h3>

            <p>
                Pets who have already had a consultation or treatment
                and require follow-up advice.
            </p>

            <div class="package-price">
                Price: ₹____
            </div>
        `;

    }


    content.innerHTML = html;

    detailModal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closeTeleconsultationDetails() {

    const modal =
        document.getElementById("teleconsultationDetails");

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}


// Close Teleconsultation package overlay
document.getElementById("teleconsultationPackages")
    .addEventListener("click", function(e) {

        if (e.target === this) {
            closeTeleconsultationPackages();
        }

    });


// Close Teleconsultation details overlay
document.getElementById("teleconsultationDetails")
    .addEventListener("click", function(e) {

        if (e.target === this) {
            closeTeleconsultationDetails();
        }

    });
