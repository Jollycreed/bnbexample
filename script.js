// Language Toggle Functionality
function switchLanguage(lang) {
    const content = {
        en: {
            about: "Welcome to Bed & Breakfast",
            aboutDesc: "This is an example website and not a real B&B.",
            rooms: "Our Rooms",
            amenities: "Amenities",
            location: "Location",
            contact: "Contact Us",
            amenitiesList: [
                "Free Wi-Fi",
                "Complimentary Breakfast",
                "Private Parking",
                "Garden and Terrace"
            ],
            contactButton: "Send"
        },
        it: {
            about: "Benvenuti al Bed & Breakfast",
            aboutDesc: "Questo è un sito web di esempio e non un vero B&B.",
            rooms: "Le Nostre Stanze",
            amenities: "Servizi",
            location: "Posizione",
            contact: "Contattaci",
            amenitiesList: [
                "Wi-Fi Gratuito",
                "Colazione Inclusa",
                "Parcheggio Privato",
                "Giardino e Terrazza"
            ],
            contactButton: "Invia"
        }
    };

    document.querySelector("#about h1").textContent = content[lang].about;
    document.querySelector("#about p").textContent = content[lang].aboutDesc;
    document.querySelector("#rooms h2").textContent = content[lang].rooms;
    document.querySelector("#amenities h2").textContent = content[lang].amenities;
    document.querySelector("#location h2").textContent = content[lang].location;
    document.querySelector("#contact h2").textContent = content[lang].contact;

    // Update amenities list
    const amenitiesList = document.querySelector("#amenities ul");
    amenitiesList.innerHTML = content[lang].amenitiesList.map(item => `<li>${item}</li>`).join("");

    // Update contact button text
    document.querySelector("#contact button").textContent = content[lang].contactButton;
}

// Form Validation
function validateAndSecureForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
