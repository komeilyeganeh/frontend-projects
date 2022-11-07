const sections = document.querySelectorAll("section");
const navEffect = document.querySelector(".nav-effect");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      let className = entry.target.className;
      let activeLink = document.querySelector(`[data-page="${className}"]`);
      const coordinates = activeLink.getBoundingClientRect();
      const directions = {
        width: coordinates.width,
        height: coordinates.height,
        top: coordinates.top,
        left: coordinates.left,
      };
      if (entry.isIntersecting) {
        navEffect.style.setProperty("height", `${directions.height}px`);
        navEffect.style.setProperty("width", `${directions.width}px`);
        navEffect.style.setProperty("top", `${directions.top}px`);
        navEffect.style.setProperty("left", `${directions.left}px`);
      }
    });
  },
  { threshold: 0.7 }
);

sections.forEach((section) => observer.observe(section));
