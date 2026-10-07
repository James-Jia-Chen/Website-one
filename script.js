const button = document.getElementById("toggleButton");
const fact = document.getElementById("funFact");

button.addEventListener("click", function () {
  fact.hidden = !fact.hidden;

  if (fact.hidden) {
    button.textContent = "Show Fun Fact";
  } else {
    button.textContent = "Hide Fun Fact";
  }
});
