// Menú responsive
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Footer dinámico
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModifiedDate").textContent = document.lastModified;

// Datos estáticos de clima
const temperature = 12; // en °C
const windSpeed = 10;   // en km/h

// Fórmula oficial de wind chill en °C
function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
}

// Mostrar clima
document.getElementById("tempValue").textContent = `${temperature} °C`;
document.getElementById("windSpeedValue").textContent = `${windSpeed} km/h`;

if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("windChillValue").textContent =
        calculateWindChill(temperature, windSpeed) + " °C";
} else {
    document.getElementById("windChillValue").textContent = "N/A";
}
