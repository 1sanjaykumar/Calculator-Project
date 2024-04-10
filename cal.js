let display = document.getElementById("display");
let display1;
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

// function deletedisplay() {
//   display.value = display.value.pop();
//   console.log(display.value);
//   // for (i = 0; i < display.value.length; i++) {
//   //   console.log(display.value[i]);
//   // }
// }

function deletedisplay() {
  let displaychars = display.value.split("");

  displaychars.pop();

  display.value = displaychars.join("");
}
