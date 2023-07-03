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
    inputArray.unshift("0");
    const outputArray = inputArray.map((digit) => (digit === "1" ? "Beep" : digit));
    return outputArray;
  }
}