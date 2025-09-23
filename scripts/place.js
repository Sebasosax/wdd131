// Datos de Mendoza
const temperatureC = 24;
const windSpeedKmh = 10;

// Función para calcular sensación térmica
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

// Mostrar sensación térmica
const windChillElement = document.getElementById("wind-chill");
windChillElement.textContent = `Feels like: ${calculateWindChill(temperatureC, windSpeedKmh)}`;

// Mostrar temperatura real
const temperatureElement = document.getElementById("temperature");
temperatureElement.textContent = `Current temperature: ${temperatureC}°C`;

// Footer dinámico
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// Toggle menú hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("nav-visible");
});




