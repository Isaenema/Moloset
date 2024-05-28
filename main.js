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
