const shape = document.querySelector(".shape");
const rangePositionX = document.getElementById("position-x");
const rangePositionY = document.getElementById("position-y");
const sizeControl = document.getElementById("size-control");
const shapeSelect = document.getElementById("shape-select");
const okBtn = document.querySelector(".ok-btn");
const rangeR = document.getElementById("range-r");
const rangeG = document.getElementById("range-g");
const rangeB = document.getElementById("range-b");
const rangeA = document.getElementById("range-a");
const rgbaContainer = document.querySelector(".rgba-container");
const rgbaInputs = rgbaContainer.querySelectorAll("input");

rangePositionX.addEventListener("change", () => {
  shape.style.left = `${rangePositionX.value}px`;
});

rangePositionY.addEventListener("change", () => {
  shape.style.top = `${rangePositionY.value}px`;
});

sizeControl.addEventListener("change", () => {
  shape.style.transform = `scale(${sizeControl.value})`;
});

okBtn.addEventListener("click", () => {
  let shapeValue = shapeSelect.value;
  if (shapeValue === "1") {
    shape.style.borderRadius = "0";
  } else if (shapeValue === "2") {
    shape.style.borderRadius = "50%";
  }
});

rgbaInputs.forEach((rgbaInput) => {
  rgbaInput.addEventListener("change", () => {
    shape.style.backgroundColor = `rgba(${rangeR.value}, ${rangeG.value}, ${rangeB.value}, ${rangeA.value})`;
  });
});
