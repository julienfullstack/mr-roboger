// BUSINESS LOGIC //
window.addEventListener("load", function() { 
  document.querySelector("form#form").addEventListener("submit", handleFormSubmission);
});
  
function beepBoop(userInput) {
  if (isNaN(userInput)) {
    return "Sorry, your input is not a number!";
  } else {
    const numberArray = [];
    const countingArray = 0
    
    for (let i = userInput; i >= 0 ; i -= 1) {
      numberArray.push(i)  
    }
    
    const finalOutput = [];
    for (let i = 0; i < numberArray.length; i++) { 
      if (numberArray[i].toString().includes('3')) {
        finalOutput.push("Won't you be my neighbor");
      } else if (numberArray[i].toString().includes('2')) {
        finalOutput.push("Boop!");
      } else if (numberArray[i].toString().includes('1')) {
        finalOutput.push("Beep!");
      } else {
        finalOutput.push(numberArray[i].toString());
      }
    }
    return finalOutput.reverse();
  }
}

// UI LOGIC //

function handleFormSubmission(event) {
  event.preventDefault();
  const userInput = parseInt(document.getElementById("input").value);
  const finalOutput = beepBoop(userInput);
  document.getElementById("output").innerText = finalOutput;
}

