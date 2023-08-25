"use strict";

const billInput = document.getElementsByClassName("bill-input")[0];
const percentBtn = Array.from(document.getElementsByClassName("percent-btn"));
const numberInput = document.getElementsByClassName("number-input")[0];
const totalResult = document.getElementById("total");
const amount = document.getElementById("amount");
const resetButton = document.getElementsByClassName("reset")[0];
const custom = document.getElementsByClassName("custom-input")[0];
const validation = document.getElementById("validation");

let billValue = 0;
let tipsValue = 0;
let peopleValue = 0;
let total = 0;
let tipAmount = 0;

billInput.addEventListener("input", (event) => {
  billValue = parseInt(event.target.value);
  calculation();
});

numberInput.addEventListener("input", (event) => {
  peopleValue = parseInt(event.target.value);
  if (event.target.value === "0") {
    validation.style.display = "block";
    numberInput.style.border = "2px solid #e17457";
  } else {
    validation.style.display = "none";
    numberInput.style.border = "none";
  }
  calculation();
});

resetButton.addEventListener("click", () => {
  billInput.value = "";
  numberInput.value = "";
  totalResult.innerText = "$0.00";
  amount.innerText = "$0.00";
  custom.value = "";
  billValue = 0;
  tipsValue = 0;
  peopleValue = 0;
  total = 0;
  tipAmount = 0;
  resetBtn();
});
function resetBtn() {
  percentBtn.forEach((button) => {
    button.style.backgroundColor = "#00474B";
  });
}
percentBtn.forEach((element) => {
  element.addEventListener("click", (event) => {
    tipsValue = parseInt(event.target.textContent);
    resetBtn();
    event.target.style.backgroundColor = "#26C2AE";
    calculation();
  });
});

custom.addEventListener("input", (event) => {
  tipsValue = parseInt(event.target.value);
  calculation();
});

function calculation() {
  total = ((billValue + billValue * (tipsValue / 100)) / peopleValue).toFixed(
    2
  );

  tipAmount = ((billValue * (tipsValue / 100)) / peopleValue).toFixed(2);

  if (isNaN(total) || isNaN(tipAmount)) {
    totalResult.innerText = "$0.00";
    amount.innerText = "$0.00";
  } else {
    totalResult.innerText = `${total}$`;
    amount.innerText = `${tipAmount}$`;
  }
}
