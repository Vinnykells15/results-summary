document.querySelector(".circle").addEventListener("click", function () {
  let count = 0;
  const spinTimes = 3;

  function spin() {
    count++;
    this.style.transform = `rotate(${360 * count}deg)`;

    if (count < spinTimes) {
      requestAnimationFrame(spin.bind(this));
    }
  }

  spin.call(this);
});
