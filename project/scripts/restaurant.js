document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const formBox = document.getElementById("form-box"); // Caja de suscripción

    // ===============================
    // Toggle menú hamburguesa
    // ===============================
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        hamburger.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            hamburger.classList.remove("active");
        });
    });

    // ===============================
    // Resaltar link de la página actual
    // ===============================
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.querySelectorAll("a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.textDecoration = "underline";
            link.style.textDecorationColor = "#EDEAF6";
        }
    });

    // ===============================
    // Botón Back to Top
    // ===============================
    const topBtn = document.createElement("button");
    topBtn.textContent = "↑ Top";
    topBtn.id = "back-to-top";
    document.body.appendChild(topBtn);

    Object.assign(topBtn.style, {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "0.5rem 1rem",
        backgroundColor: "#a35b28",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        display: "none",
        zIndex: "1000"
    });

    topBtn.addEventListener("mouseover", () => topBtn.style.backgroundColor = "#5B3E91");
    topBtn.addEventListener("mouseout", () => topBtn.style.backgroundColor = "#A18CD1");

    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ===============================
    // Efecto "resaltar" form box al entrar en viewport
    // ===============================
    if (formBox) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        formBox.style.transform = "scale(1.05)";
                        formBox.style.transition = "transform 0.5s ease";
                    } else {
                        formBox.style.transform = "scale(1)";
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(formBox);
    }

    // ===============================
    // Feedback de formulario
    // ===============================
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        const msgContainer = document.createElement("div");
        msgContainer.id = "form-message";
        msgContainer.style.marginTop = "1rem";
        msgContainer.style.color = "white";
        msgContainer.style.backgroundColor = "#d07a2a";
        msgContainer.style.padding = "1rem";
        msgContainer.style.borderRadius = "8px";
        msgContainer.style.display = "none";
        contactForm.appendChild(msgContainer);

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita recargar la página

            // Mostrar mensaje de agradecimiento
            msgContainer.textContent = "Thank you! You are now subscribed to our promotions!";
            msgContainer.style.display = "block";

            // Limpiar campos
            contactForm.reset();

            // Scroll al mensaje
            msgContainer.scrollIntoView({ behavior: "smooth", block: "center" });

            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                msgContainer.style.display = "none";
            }, 5000);
        });
    }
});
