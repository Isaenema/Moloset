let selectedAmount = 0;
let currentAmount = 0;

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the selected amount and payment method from localStorage
  selectedAmount = parseInt(localStorage.getItem("selectedAmount"));
  const paymentMethod = localStorage.getItem("paymentMethod");

  if (selectedAmount && paymentMethod) {
    // Display the selected amount and payment method on the page
    document.getElementById("selectedAmount").textContent = selectedAmount;
    document.getElementById("paymentMethod").textContent = paymentMethod;
  }
});

function addAmount() {
  const amountInput = document.getElementById("amountInput");
  const amountToAdd = parseInt(amountInput.value);

  if (!isNaN(amountToAdd) && amountToAdd > 0) {
    currentAmount += amountToAdd;
    if (currentAmount > selectedAmount) {
      currentAmount = selectedAmount;
    }
    updateProgressBar();
    amountInput.value = "";
  } else {
    alert("Veuillez entrer un montant valide.");
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById("progressBar");
  const currentAmountElement = document.getElementById("currentAmount");
  const percentage = (currentAmount / selectedAmount) * 100;

  progressBar.style.width = percentage + "%";
  progressBar.textContent = Math.round(percentage) + "%";
  currentAmountElement.textContent = currentAmount;

  if (currentAmount >= selectedAmount) {
    alert("Montant total atteint!");
  }
}
