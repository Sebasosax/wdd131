document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        hamburger.classList.toggle("active");
    });

    // Resaltar link actual
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.querySelectorAll("a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.textDecoration = "underline";
            link.style.textDecorationColor = "#EDEAF6";
        }
    });

    // Botón back to top
    const topBtn = document.createElement("button");
    topBtn.textContent = "↑ Top";
    topBtn.id = "back-to-top";
    document.body.appendChild(topBtn);
    Object.assign(topBtn.style, {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "0.5rem 1rem",
        backgroundColor: "#A18CD1",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        display: "none",
        zIndex: "1000"
    });

    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
