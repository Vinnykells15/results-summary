const circle = document.querySelector(".circle");
const button = document.querySelector(".button");
let totalSpins = 0;

function spinCircle() {
  const spinTimes = 10;
  const spinsToAdd = spinTimes * 360;
  totalSpins += spinsToAdd;

  circle.style.transition = "transform 3s ease-in-out";
  circle.style.transform = `rotate(${totalSpins}deg)`;
}

circle.addEventListener("click", spinCircle);
button.addEventListener("click", spinCircle);
