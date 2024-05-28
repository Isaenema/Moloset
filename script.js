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

// document.addEventListener("DOMContentLoaded", function () {
//   const messageElement = document.getElementById("customMessage");
//   const fullMessage = "Merci de poser votre carte sur le lecteur NFC";
//   const typingDelay = 1500 / fullMessage.length;

//   const rechargeElement = document.getElementById("messageRecharger");
//   const rechargeMessage = "Vous pouvez recharger de ";
//   const rechargeDelay = 1500 / rechargeMessage.length;

//   let letterIndex = 0;
//   function typeLetter() {
//     if (letterIndex < fullMessage.length) {
//       messageElement.textContent += fullMessage.charAt(letterIndex);
//       letterIndex++;
//       setTimeout(typeLetter, typingDelay);
//     } else {
//       addBlinkEffect(messageElement);
//     }
//   }

//   let rechargeIndex = 0;
//   function typeRechargeLetter() {
//     if (rechargeIndex < rechargeMessage.length) {
//       rechargeElement.textContent += rechargeMessage.charAt(rechargeIndex);
//       rechargeIndex++;
//       setTimeout(typeRechargeLetter, rechargeDelay);
//     } else {
//       addBlinkEffect(rechargeElement, ":");
//     }
//   }

//   function addBlinkEffect(element, text = ".") {
//     const period = document.createElement("span");
//     period.textContent = text;
//     period.classList.add("blink");
//     element.appendChild(period);
//     setTimeout(() => {
//       period.classList.remove("blink");
//     }, 4000);
//   }

//   typeLetter();
//   typeRechargeLetter();
// });
