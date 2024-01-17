let valueDisplays = document.querySelectorAll(".item-stats__count");
let interval = 2000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let duration = Math.floor(interval / endValue);
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let widthInChars = endValue.toString().length;
  valueDisplay.style.minWidth = `${widthInChars + 1}ch`;
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue + "+";
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
