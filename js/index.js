const messageElement = document.getElementById("message");
const fullMessage = "Merci de poser votre carte sur le lecteur NFC";
const typingDelay = 2000 / fullMessage.length;

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
  setInterval(() => {
    period.classList.toggle("blink");
  }, 800);
}
typeLetter();
