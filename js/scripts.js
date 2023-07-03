window.addEventListener("load", function() {
  let form = document.getElementById("form");
  let submit = document.querySelector("#form button[type='submit']");

  submit.addEventListener("click", handleFormSubmission);
});

function handleFormSubmission(event) {
  event.preventDefault();
  let input = document.getElementById("input").value;
  document.getElementById("output").innerText = beepBoop(input);
}


function beepBoop(input) {
  const inputArray = (Array.from('input'))
}
