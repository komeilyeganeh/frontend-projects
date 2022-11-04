const images = document.querySelectorAll(".image-container img"),
modalContainer = document.querySelector(".modal-container"),
modalImage = document.querySelector(".modal-image img");

images.forEach(img => {
    img.addEventListener("click", () => {
        modalContainer.classList.add("active");
        let imgName = img.getAttribute("data-img-full");
        modalImage.src = `./img/full/${imgName}.jpg`;
    });
});
modalContainer.addEventListener("click", () => {
    modalContainer.classList.remove("active");
});