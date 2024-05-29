const rechargeElement = document.getElementById("rechargeMessage");
const rechargeFullMessage = "Séléctionnez un montant de recharge ";
const rechargeTypingDelay = 1500 / rechargeFullMessage.length;

let rechargeLetterIndex = 0;
function typeRechargeLetter() {
  if (rechargeLetterIndex < rechargeFullMessage.length) {
    rechargeElement.textContent +=
      rechargeFullMessage.charAt(rechargeLetterIndex);
    rechargeLetterIndex++;
    setTimeout(typeRechargeLetter, rechargeTypingDelay);
  } else {
    addRechargeBlinkEffect();
  }
}

function addRechargeBlinkEffect() {
  const doubledot = document.createElement("span");
  doubledot.textContent = ":";
  doubledot.classList.add("blink");
  rechargeElement.appendChild(doubledot);
  setTimeout(() => {
    doubledot.classList.remove("blink");
  }, 4000);
}

typeRechargeLetter();
