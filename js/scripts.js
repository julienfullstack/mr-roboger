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
      unless (!inputArray[i].includes('3')) {
        finalOutput.push("Won't you be my neighbor?");
      } unless (!inputArray[i].includes('2')) {
        finalOutput.push("Boop");
      } unless (!inputArray[i].includes('1')) {
        finalOutput.push("Beep");
      } else {
        finalOutput.push(inputArray[i]);
      }
    }
    return finalOutput.join("");
    }
   }
