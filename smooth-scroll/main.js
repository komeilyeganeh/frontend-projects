const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("data-target");
    const targetSection = document.querySelector(`.${target}`);
    window.scrollTo({ top: targetSection.offsetTop, behavior: "smooth" });
  });
});
