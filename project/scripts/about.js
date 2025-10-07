document.addEventListener("DOMContentLoaded", () => {
    console.log("🍽️ Welcome to Doña Betty Empanadas! Enjoy browsing our menu.");

    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.textDecoration = "underline";
            link.style.textDecorationColor = "#EDEAF6";
        }
    });

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

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
        const header = document.querySelector("header");
        header.style.backgroundColor = window.scrollY > 50 ? "#8662b0" : "#A18CD1";
        header.style.transition = "background-color 0.3s";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

