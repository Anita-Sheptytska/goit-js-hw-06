function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
console.log(btnEl);

const spanEl = document.querySelector('.color');
console.log(spanEl);

const bodyEl = document.querySelector('body');
console.log(bodyEl);

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}

btnEl.addEventListener("click", changeColor);


