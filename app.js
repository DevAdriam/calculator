// selectors
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll(".cells");
// addEventListeners
keys.forEach((key) => {
  key.addEventListener("click", calculate);
});

function calculate() {
  let buttonText = this.innerText;
  if (buttonText === "AC") {
    output.innerText = "";
    result.innerText = "0";
    result.style.animation = "";
    output.style.animation = "";
    return;
  }
  if (buttonText === "C") {
    output.textContent = output.textContent.substr(
      0,
      output.textContent.length - 1
    );
    return;
  }
  // if (result.innerText === "0") {
  //   result.innerText = "0";
  //   return;
  // }

  if (buttonText === "=" && result.innerText !== "0") {
    result.style.animation = "big 0.4s ease-in-out";
    output.style.animation = "small 0.3s ease-in-out";
    result.style.animationFillMode = "forwards";
    output.style.animationFillMode = "forwards";
    return;
  }
  if (buttonText !== "=") {
    output.textContent += buttonText;
    result.innerText = eval(output.innerText);
  }
}
