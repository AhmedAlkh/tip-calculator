// When custom tip is clicked
// Custom button will transform into input field
// User will enter custom tip percentage
// custom button will have additional styles applied when clicked

const billAmountInput = document.querySelector("#bill-input");
const peopleCountInput = document.querySelector("#num-of-people");
const customTipPercentageRadio = document.querySelector(
  "#customTipPercentageRadio"
);
const customTipPercentageInput = document.querySelector(
  "#customTipPercentageInput"
);
const tipPerPersonSpan = document.querySelector("#tipPerPerson");
const totalPerPersonSpan = document.querySelector("#totalPerPerson");

function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value) || 0;
  const peopleCount = parseInt(peopleCountInput.value) || 1;
  let tipPercentage = 0;
  if (customTipPercentageRadio.checked) {
    tipPercentage = parseInt(customTipPercentageInput.value) || 0;
  } else {
    const checkedRadio = document.querySelector(
      'input[name="tip-percentage"]:checked'
    );
    tipPercentage = checkedRadio ? parseInt(checkedRadio.value) : 0;
  }
  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = billAmount + tipAmount;
  const totalPerPerson = totalAmount / peopleCount;
  const tipPerPerson = tipAmount / peopleCount;
  tipPerPersonSpan.textContent = "$" + tipPerPerson.toFixed(2);
  totalPerPersonSpan.textContent = "$" + totalPerPerson.toFixed(2);
}

const resetButton = document.querySelector(".reset-btn");

resetButton.addEventListener("click", function () {
  billAmountInput.value = "";
  peopleCountInput.value = "";
  // customTipPercentage.value = '';
  // Change this back to false when custom is working?
  customTipPercentageRadio.checked = true;
  customTipPercentageRadio.style.display = "block";
  // customTipPercentage.style.display = 'none';
  tipPerPersonSpan.textContent = "$0.00";
  totalPerPersonSpan.textContent = "$0.00";
});
