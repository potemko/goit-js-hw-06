function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomColor = document.querySelector(".change-color");
const newColor = document.querySelector(".color");
const body = document.querySelector("body")

randomColor.addEventListener("click", (event) => {
  
  const bodyColor = (body.style.backgroundColor = getRandomHexColor());
  newColor.textContent = bodyColor.value;
}
)