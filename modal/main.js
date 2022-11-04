const btnOpenModal = document.querySelector(".open-modal"),
btnCloseModal = document.querySelector(".close-modal"),
modal = document.querySelector(".modal"),
modalContainer = document.querySelector(".modal-container");

btnOpenModal.addEventListener("click", () => {
    modalContainer.classList.add("active");
    modal.classList.add("active");
});
btnCloseModal.addEventListener("click", () => {
    modalContainer.classList.remove("active");
    modal.classList.remove("active");
});