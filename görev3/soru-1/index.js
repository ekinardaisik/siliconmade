document.getElementById("getNumbers").addEventListener("click", function () {
  const numbersDiv = document.getElementById("numbers");

  for (let i = 1; i <= 99; i++) {
    const span = document.createElement("span");
    span.textContent = i + " ";
    numbersDiv.appendChild(span);
    if (i % 10 === 0) {
      numbersDiv.appendChild(document.createElement("br"));
      numbersDiv.appendChild(document.createElement("br"));
    }
  }

  this.disabled = true;
  document.getElementById("randomSelect").disabled = false;
});

document.getElementById("randomSelect").addEventListener("click", function () {
  const spans = document.getElementById("numbers").getElementsByTagName("span");
  const randomIndex = Math.floor(Math.random() * 99);
  spans[randomIndex].classList.add("selected");
});
