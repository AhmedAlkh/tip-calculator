// const bill =
// const tipPercentage =
// const numberOfPeople =
// const tipAmountPerPerson =
// const totalPerPerson =
// Tip amount per person = bill X 0.15(15%) / number of people
// Total per person = bill + tip / number of people
// Will need to convert tip percentage entered/selected to converted into decimal form for equation

// There is no submit button,
// The information in the results sections should total as the information is being entered live

// When custom tip is clicked
// Custom button will transform into input field
// User will enter custom tip percentage
// custom button will have additional styles applied when clicked

// Will need to change innerHTML/textContent of tip amount and total result

// Reset button will reset the whole form

// User will enter the total bill
// User will select a tip percentage
// User will enter the number of people

// const bill = document.getElementById("bill-input"); ✅
// const numberOfPeople = document.getElementById("num-of-people"); ✅
// get the selected tip percentage in a variable ✅
// const tipPercentage = ✅
// const totalTip = bill X tipPercentage; ✅
// const billPlusTip = bill X tipPercentage + bill; ✅
// tipAmountPerPerson should equal totalTip / numberOfPeople ✅
// totalCostPerPerson should equal billPlusTip / numberOfPeople ✅

// Global Variables
// let tipPercentage;
// const bill = document.getElementById("bill-input");
// const numberOfPeople = document.getElementById("num-of-people");
// const totalTip = bill * tipPercentage;
// const billPlusTip = bill * tipPercentage + bill;
// const tipAmountPerPerson = totalTip / numberOfPeople;
// const totalCostPerPerson = billPlusTip / numberOfPeople;

// // Add functionality of tip button percentages into update total function

// // This is listening for which of the percentage buttons is clicked and converting them into a decimal
// let radioButtons = document.querySelectorAll("input[name='tip-percentage']");
// for (let i = 0; i < radioButtons.length; i++) {
//   radioButtons[i].addEventListener("click", function () {
//     let tipPercentRaw = this.value;
//     let tipPercentageWhole = parseInt(tipPercentRaw);
//     let tipPercentage = tipPercentageWhole / 100;
//   });
// }

// function updateTotal() {
//   const tipCost = document.querySelector(".tip-cost");
//   const totalCost = document.querySelector(".total-cost");

//   tipCost.textContent = tipAmountPerPerson;
//   totalCost.textContent = totalCostPerPerson;
// }

// updateTotal();

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
