function goBack() {
  window.history.back();
}
function selectAmount(amount) {
  localStorage.setItem("selectedAmount", amount);
}

function validateAmount() {
  const selectedAmount = localStorage.getItem("selectedAmount");

  if (selectedAmount) {
    window.location.href = "Moyenpaiement.html";
  } else {
    alert("Veuillez sélectionner un montant.");
  }
}

function selectPaymentMethod(method) {
  localStorage.setItem("paymentMethod", method);

  if (method === "Carte bancaire") {
    window.location.href = "confirmationCB.html";
  } else if (method === "Espèces") {
    window.location.href = "confirmationCash.html";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const selectedAmount = localStorage.getItem("selectedAmount");
  const paymentMethod = localStorage.getItem("paymentMethod");

  if (selectedAmount && paymentMethod) {
    document.getElementById("selectedAmount").textContent = selectedAmount;
    document.getElementById("paymentMethod").textContent = paymentMethod;
  }
});
