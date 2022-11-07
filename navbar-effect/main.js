const sections = document.querySelectorAll("section");
const navEffect = document.querySelector(".nav-effect");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeLink = document.querySelector(`[data-page="${className}"]`);
        const coordinates = activeLink.getBoundingClientRect();
        if (entry.isIntersecting) {
            navEffect.style.setProperty("width", `${coordinates.width}px`);
            navEffect.style.setProperty("height", `${coordinates.height}px`);
            navEffect.style.setProperty("top", `${coordinates.top}px`);
            navEffect.style.setProperty("left", `${coordinates.left}px`);
        }
    });
}, { threshold: 0.7 });

sections.forEach(section => observer.observe(section));
