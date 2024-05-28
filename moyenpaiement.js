const moyenMessageElement = document.getElementById("messageMoyen");
const moyenFullMessage = "Choisissez votre moyen de paiement ";
const moyenTypingDelay = 1000 / moyenFullMessage.length;

let letterIndex = 0;
function moyenTypeLetter() {
  if (letterIndex < moyenFullMessage.length) {
    moyenMessageElement.textContent += moyenFullMessage.charAt(letterIndex);
    letterIndex++;
    setTimeout(moyenTypeLetter, moyenTypingDelay);
  } else {
    addMoyenBlinkEffect();
  }
}

function addMoyenBlinkEffect() {
  const period = document.createElement("span");
  period.textContent = ":";
  period.classList.add("blink");
  moyenMessageElement.appendChild(period);
  setTimeout(() => {
    period.classList.remove("blink");
  }, 4000);
}
moyenTypeLetter();
