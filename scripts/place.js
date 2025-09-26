// Menú responsive
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Footer dinámico
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModifiedDate").textContent = document.lastModified;

// Función de wind chill
function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
}

// Datos estáticos de Mendoza
const temperatureC = 10; // temperatura de ejemplo
const windSpeedKmh = 15; // velocidad del viento de ejemplo

document.getElementById("tempValue").textContent = `${temperatureC} °C`;
document.getElementById("windSpeedValue").textContent = `${windSpeedKmh} km/h`;

// Wind chill solo si aplica
if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    document.getElementById("windChillValue").textContent =
        calculateWindChill(temperatureC, windSpeedKmh) + " °C";
} else {
    document.getElementById("windChillValue").textContent = "N/A";
}
