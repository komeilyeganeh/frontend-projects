const display = document.querySelector(".display textarea");
const keys = document.querySelectorAll(".keys input");
const btnDelete = document.querySelector(".btn-delete");

keys.forEach(key => {
    key.addEventListener("click", () => {
        const inputValue = key.value.toLowerCase();
        display.textContent += inputValue;
        setTimeout(() => {
            key.blur();
        }, 200);
    });
});

btnDelete.addEventListener("click", (btn) => {
    btn.preventDefault();
    display.textContent = display.innerHTML.slice(0, -1);
})
