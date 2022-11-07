const body = document.body;
const color = document.querySelector(".color");
const btnSwitch = document.querySelector(".btn-switch");
const btnCopy = document.querySelector(".btn-copy");

window.onload = () =>
  (document.body.style.backgroundColor = "rgb(255,255,255)");

const getRandomColor = () => Math.floor(Math.random() * 256);

btnSwitch.addEventListener("click", () => {
  const colorOne = getRandomColor();
  const colorTwo = getRandomColor();
  const colorThree = getRandomColor();
  body.style.backgroundColor = `rgb(${colorOne},${colorTwo},${colorThree})`;
  color.innerHTML = `rgb (${colorOne}, ${colorTwo}, ${colorThree})`;
});

btnCopy.addEventListener("click", () => {
  const colorBody = document.body.style.backgroundColor;
  navigator.clipboard.writeText(colorBody);
  alert("The color was copied :)");
});
