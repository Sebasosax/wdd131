document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

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


