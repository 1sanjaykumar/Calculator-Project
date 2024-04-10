const display = document.getElementById("display");

function apendToDisplay(input) {
  if (display.value == "Error") {
    display.value = "";
  }
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function cleardisplay() {
  display.value = "";
}
