// GLOBAL VARIABLES
const billAmountInput = document.querySelector("#bill-input");
const peopleCountInput = document.querySelector("#num-of-people");
const customTipPercentage = document.querySelector("#customTipPercentage");
const tipPerPersonSpan = document.querySelector("#tipPerPerson");
const totalPerPersonSpan = document.querySelector("#totalPerPerson");

// CALCULATE FUNCTION
function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value) || 0;
  const peopleCount = parseInt(peopleCountInput.value) || 1;
  const customTipPercentageValue = document.getElementById(
    "customTipPercentage"
  ).value;
  let tipPercentage = 0;
  const checkedRadio = document.querySelector(
    'input[name="tip-percentage"]:checked'
  );
  if (customTipPercentageValue && checkedRadio) {
    alert(
      "Please choose either a custom tip percentage or a preset percentage, not both."
    );
    reset();
    return;
  } else if (customTipPercentageValue) {
    tipPercentage = parseInt(customTipPercentageValue) || 0;
  } else {
    tipPercentage = checkedRadio ? parseInt(checkedRadio.value) : 0;
  }
  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = billAmount + tipAmount;
  const totalPerPerson = totalAmount / peopleCount;
  const tipPerPerson = tipAmount / peopleCount;
  tipPerPersonSpan.textContent = "$" + tipPerPerson.toFixed(2);
  totalPerPersonSpan.textContent = "$" + totalPerPerson.toFixed(2);
}

// RESET FUNCTION
function reset() {
  billAmountInput.value = "";
  peopleCountInput.value = "";
  customTipPercentage.value = "";
  const tipOption = document.querySelectorAll('input[name="tip-percentage"]');
  tipOption.forEach(function (radio) {
    radio.checked = false;
  });
  tipPerPersonSpan.textContent = "$0.00";
  totalPerPersonSpan.textContent = "$0.00";
}

// RESET BUTTON
const resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener("click", reset);

// Listen for changes in the custom tip percentage input field
customTipPercentage.addEventListener("input", calculateTip);

// ========================= CODE EXPLANTATION FOR LEARNING PURPOSES ==========================

// GLOBAL VARIABLES

// Declare constant variables to store references to the HTML input elements on the page.

// const billAmountInput = document.querySelector("#bill-input"); input field for bill amount.
// const peopleCountInput = document.querySelector("#num-of-people"); input field for number of people.
// const customTipPercentage = document.querySelector("#customTipPercentage"); input field for custom tip percentage.
// const tipPerPersonSpan = document.querySelector("#tipPerPerson"); span element to display the tip per person amount.
// const totalPerPersonSpan = document.querySelector("#totalPerPerson"); span element to display the total amount per person.

// CALCULATE FUNCTION

// Define a calculateTip function to calculate and display the tip amount and total amount per person.
// Get the bill amount and number of people input values and parse them to numbers using the parseFloat and parseInt functions. If the input value is not a number, use a default value of 0 or 1.
// Get the value of the custom tip percentage input field.
// Check if both the custom tip percentage input field and the preset tip percentage radio buttons are filled, if so, show an alert and return from the function.
// Calculate the tip percentage based on either the custom tip percentage input value or the selected preset tip percentage radio button value.
// Calculate the tip amount and total amount per person by multiplying the bill amount with the tip percentage, dividing the total amount by the number of people.
// Update the text content of the tipPerPersonSpan and totalPerPersonSpan elements with the calculated values.

// function calculateTip() {
//   const billAmount = parseFloat(billAmountInput.value) || 0;
//   const peopleCount = parseInt(peopleCountInput.value) || 1;
//   const customTipPercentageValue = document.getElementById(
//     "customTipPercentage"
//   ).value;
//   let tipPercentage = 0;
//   const checkedRadio = document.querySelector(
//     'input[name="tip-percentage"]:checked'
//   );
//   if (customTipPercentageValue && checkedRadio) {
//     alert(
//       "Please choose either a custom tip percentage or a preset percentage, not both."
//     );
//     reset();
//     return;
//   } else if (customTipPercentageValue) {
//     tipPercentage = parseInt(customTipPercentageValue) || 0;
//   } else {
//     tipPercentage = checkedRadio ? parseInt(checkedRadio.value) : 0;
//   }
//   const tipAmount = billAmount * (tipPercentage / 100);
//   const totalAmount = billAmount + tipAmount;
//   const totalPerPerson = totalAmount / peopleCount;
//   const tipPerPerson = tipAmount / peopleCount;
//   tipPerPersonSpan.textContent = "$" + tipPerPerson.toFixed(2);
//   totalPerPersonSpan.textContent = "$" + totalPerPerson.toFixed(2);
// }

// RESET FUNCTION

// Define a reset function to reset the form to its original state.
// Get a reference to the reset button and add a click event listener to it.
// Inside the event listener function, clear the input values of all the input fields.
// Uncheck all the preset tip percentage radio buttons.
// Set the text content of the tipPerPersonSpan and totalPerPersonSpan elements to "$0.00".

// function reset() {
//   billAmountInput.value = "";
//   peopleCountInput.value = "";
//   customTipPercentage.value = "";
//   const tipOption = document.querySelectorAll('input[name="tip-percentage"]');
//   tipOption.forEach(function (radio) {
//     radio.checked = false;
//   });
//   tipPerPersonSpan.textContent = "$0.00";
//   totalPerPersonSpan.textContent = "$0.00";
// }

// RESET BUTTON

// Call the reset function to initialize it.

// const resetButton = document.querySelector(".reset-btn");
// resetButton.addEventListener("click", reset);

// Add an input event listener to the custom tip percentage input field to trigger the calculateTip function whenever the input value changes.

// Listen for changes in the custom tip percentage input field
// customTipPercentage.addEventListener("input", calculateTip);
