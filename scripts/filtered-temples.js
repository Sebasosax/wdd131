// 🔹 Array of Temples
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Mendoza Argentina",
        location: "Mendoza, Argentina",
        dedicated: "2024-09-22",
        area: 14000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mendoza-argentina/400x250/mendoza-argentina-temple-exterior.jpg"
    },
    {
        templeName: "San José Costa Rica",
        location: "San José, Costa Rica",
        dedicated: "2000-03-04",
        area: 10200,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/bd91294858daabca93f65c705d65adc00568c3c3/full/640%2C/0/default"
    },
    {
        templeName: "Jordan River Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "1981-10-16",
        area: 83000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/87cb982259d1103385e7d2a0e07f41a0954eb4f8/full/640%2C/0/default"
    }
];

// 🔹 Display Temples in Gallery
const gallery = document.getElementById('temple-gallery');

function displayTemples(templesArray) {
    gallery.innerHTML = ''; // Clear previous
    templesArray.forEach(temple => {
        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy';

        // Format date to "Month Day, Year"
        const formattedDate = new Date(temple.dedicated).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        const caption = document.createElement('figcaption');
        caption.innerHTML = `<strong>${temple.templeName}</strong><br>
                             ${temple.location}<br>
                             Dedicated: ${formattedDate}<br>
                             Area: ${temple.area.toLocaleString()} sq ft`;

        figure.appendChild(img);
        figure.appendChild(caption);
        gallery.appendChild(figure);
    });
}

// 🔹 Filter by Menu
const menuLinks = document.querySelectorAll('#main-nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;

        let filteredTemples = temples;

        switch (filter) {
            case 'old':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
            case 'all':
            default:
                filteredTemples = temples;
        }

        displayTemples(filteredTemples);
    });
});

// 🔹 Initial Display
displayTemples(temples);

// 🔹 Footer Info
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// 🔹 Hamburger Menu
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("nav-visible");

    if (mainNav.classList.contains("nav-visible")) {
        menuToggle.textContent = '✖';
        menuToggle.setAttribute("aria-label", "Close Menu");
    } else {
        menuToggle.textContent = '☰';
        menuToggle.setAttribute("aria-label", "Open Menu");
    }
});
