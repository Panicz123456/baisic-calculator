const inputCalculator = document.querySelectorAll("input-calculator");

function appendToDisplay(input) {
  inputCalculator.value += input;
}

function calculator() {
  inputCalculator.value = "";
}

function clearDisplay() {
    try { 
      inputCalculator.value = eval(inputCalculator.values);
  }
  catch(error) {
    inputCalculator.value = "Error";
  }
}
