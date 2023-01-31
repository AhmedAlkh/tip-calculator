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
