// Display the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Display the last modified date in a readable format
const lastModified = new Date(document.lastModified).toLocaleString();
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


