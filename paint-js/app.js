const canvas = document.getElementById("canvas");
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnClear = document.querySelector(".clear");
const colorInput = document.getElementById("color");
const sizeStroke = document.querySelector(".size");

let size = 10;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

let ctx = canvas.getContext("2d");

// Responsive
window.addEventListener("resize", resizeWindow);
function resizeWindow() {
    ctx.canvas.width = window.innerWidth - 100;
    ctx.canvas.height = window.innerHeight - 200;
};
resizeWindow();

// get start points
canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

// get end points
canvas.addEventListener("mouseup", () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

// drawing canvas
canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawLine(x, y, x2, y2);
        drawCircle(x2, y2);
        x = x2;
        y = y2;
    }
});

// Draw line
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

// Draw circle
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// Change size
btnIncrease.addEventListener("click", () => {
    size += 1;
    if (size > 50) size = 50;
    updateSize();
});
btnDecrease.addEventListener("click", () => {
    size -= 1;
    if (size < 1) size = 1;
    updateSize();
});

// Update size
function updateSize() {
    sizeStroke.innerHTML = size;
}

// Change color
colorInput.addEventListener("change", (e) => {
    color = e.target.value;
});

// Clear
btnClear.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});