window.addEventListener("load", function() {
  let form = document.getElementById("form");
  let submit = document.querySelector("#form button[type='submit']");

  submit.addEventListener("click", handleFormSubmission);
});

function handleFormSubmission(event) {
  event.preventDefault();
  let userInput = document.getElementById("input").value;
  document.getElementById("output").innerText = beepBoop(input);
}


function beepBoop(userInput) {
  if (typeof userInput !== "number") {
    return "Sorry, your input is not a number!";
  }
  
  const inputArray = Array.from(userInput.toString());
  inputArray.unshift("0");

  return inputArray;
}
