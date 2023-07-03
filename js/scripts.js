/// BUSINESS LOGIC ///
window.addEventListener("load", function() { 
  document.querySelector("form#form").addEventListener("submit", handleFormSubmission);
  });

function handleFormSubmission(event) {
  event.preventDefault();
  const userInput = document.getElementById("input").value;
  const finalOutput = beepBoop(userInput);
  document.getElementById("output").innerText = finalOutput;
}

function beepBoop(userInput) {
  if (isNaN(userInput)) {
    return "Sorry, your input is not a number!";
  } else {
    const inputArray = Array.from(userInput.toString());
    const finalOutput = [];

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].includes('3')) {
        finalOutput.splice(0, 1,"Won't you be my neighbor?");
      } else if (inputArray[i].includes('2')) {
        finalOutput.splice(0, 1, "Boop!");
      } else if (inputArray[i].includes('1')) {
        finalOutput.splice(0, 1, "Beep!");
      } else {
        finalOutput.push(inputArray[i]);
      }
    }

    return finalOutput.join("");
  }
}