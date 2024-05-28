const messageElement = document.getElementById("message");
const fullMessage = "Merci de poser votre carte sur le lecteur NFC";
const typingDelay = 1500 / fullMessage.length;

let letterIndex = 0;
function typeLetter() {
  if (letterIndex < fullMessage.length) {
    messageElement.textContent += fullMessage.charAt(letterIndex);
    letterIndex++;
    setTimeout(typeLetter, typingDelay);
  } else {
    addBlinkEffect();
  }
}

function addBlinkEffect() {
  const period = document.createElement("span");
  period.textContent = ".";
  period.classList.add("blink");
  messageElement.appendChild(period);
  setTimeout(() => {
    period.classList.remove("blink");
  }, 4000);
}
typeLetter();
