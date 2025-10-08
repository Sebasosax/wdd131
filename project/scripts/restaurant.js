document.addEventListener("DOMContentLoaded", () => {
    // ===== Hamburger Menu =====
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

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

    // ===== Highlight Current Page =====
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.querySelectorAll("a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.textDecoration = "underline";
            link.style.textDecorationColor = "#EDEAF6";
        }
    });

    // ===== Back to Top Button =====
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

    // ===== Highlight Contact Box on Scroll =====
    const contactBox = document.querySelector(".contact-box");
    if (contactBox) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    contactBox.style.transform = entry.isIntersecting ? "scale(1.05)" : "scale(1)";
                    contactBox.style.transition = "transform 0.5s ease";
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(contactBox);
    }

    // ===== Newsletter Form =====
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", e => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const experience = form.experience.value.trim();

        if (!name || !email) {
            alert("Please fill in the required fields.");
            return;
        }

        // Save in localStorage
        let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
        subscribers.push({ name, email, phone, experience });
        localStorage.setItem("subscribers", JSON.stringify(subscribers));

        // Show thank you message
        form.innerHTML = `<p style="text-align:center; font-weight:bold; color:var(--primary);">
            Thank you, ${name}! You have successfully subscribed to our newsletter.
        </p>`;
    });
});
