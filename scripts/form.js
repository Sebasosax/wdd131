const products = [
    { id: 1, name: "River Tent Deluxe" },
    { id: 2, name: "Mountain Trek Backpack" },
    { id: 3, name: "Solar Camping Lantern" },
    { id: 4, name: "Portable Water Filter" },
    { id: 5, name: "Insulated Sleeping Bag" },
    { id: 6, name: "Compact Camping Stove" },
    { id: 7, name: "Adventure Hammock" },
    { id: 8, name: "Trail Hiking Boots" },
    { id: 9, name: "Eco-Friendly Cookware Set" },
    { id: 10, name: "Rechargeable Headlamp" }
];


const selectElement = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});
