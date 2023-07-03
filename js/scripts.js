/// BUSINESS LOGIC ///
window.addEventListener("load", function() {
  let form = document.getElementById("form");
  let submit = document.querySelector("#form button[type='submit']");
  submit.addEventListener("click", handleFormSubmission);
});

function handleFormSubmission(event) {
  event.preventDefault();
  let userInput = document.getElementById("input").value;
  let outputArray = beepBoop(userInput);
  document.getElementById("output").innerText = outputArray;
}

function beepBoop(userInput) {
  if (typeof userInput !== "number") {
    return "Sorry, your input is not a number!";
  } else {
    const inputArray = Array.from(userInput.toString());
    inputArray.unshift("0");
    const outputArray = inputArray.map((digit) => digit === "1" ? "Beep" : digit);
    return outputArray;
  }
}