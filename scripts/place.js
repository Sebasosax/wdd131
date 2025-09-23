// Datos de ejemplo de Mendoza
const temperatureC = 24; // temperatura actual
const windSpeedKmh = 10; // velocidad del viento

// Función para calcular sensación térmica (solo si hace frío)
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return null;
    }
}

// Mostrar sensación térmica
const windChillElement = document.getElementById("wind-chill");
const chill = calculateWindChill(temperatureC, windSpeedKmh);
windChillElement.textContent = chill
    ? `Feels like: ${chill}°C`
    : `Feels like: ${temperatureC}°C`; // si no aplica, muestra temp normal

// Mostrar temperatura real
const temperatureElement = document.getElementById("temperature");
temperatureElement.textContent = `Current temperature: ${temperatureC}°C`;

// Footer dinámico
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;



