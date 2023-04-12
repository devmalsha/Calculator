let firstNum = "";
let secNum = "";
let currentValue = "";
let operator = "";
let secDisplay;
let display;
let sumNumber1;
let sumIs;
let afterOperator = "";
let beforeOperator = "";
let currentValueIs = "";
const clicked = (idIs) => {
  secNum = document.getElementById(idIs).innerHTML;
  display = document.getElementById("display").innerHTML;

  if (operator) {
    if (secDisplay) {
      secDisplay = secDisplay * 10 + secNum * 1;
      document.getElementById("display").innerHTML = secDisplay;
    } else {
      document.getElementById("display").innerHTML = secNum;
      secDisplay = secNum;
    }
  } else {
    if (display == 0) {
      document.getElementById("display").innerHTML = secNum;
    } else if (display !== 0) {
      secNum = display * 10 + secNum * 1;
      document.getElementById("display").innerHTML = secNum;
    }
  }
};

const addition = (sumId) => {
  operator = document.getElementById(sumId).innerHTML;
  beforeOperator = document.getElementById("display").innerHTML;
  afterOperator = afterOperator * 1 + beforeOperator * 1;
  document.getElementById("display").innerHTML = afterOperator;
  secDisplay = "";
};

const subtraction = (subId) => {
  operator = document.getElementById(subId).innerHTML;
  currentValueIs = document.getElementById("display").innerHTML;
  if (afterOperator == 0) {
    console.log("Hi");
    afterOperator = currentValueIs * 1 - afterOperator * 1;
    // console.log(afterOperator);
  }
  if (!afterOperator == 0 && currentValueIs > afterOperator) {
    console.log("Hiii");
    afterOperator = afterOperator * 1 - currentValueIs * 1;
    // console.log(afterOperator);
  } else if (!afterOperator == 0 && currentValueIs < afterOperator) {
    console.log("Hiiiiiiii" + currentValueIs);
    afterOperator = afterOperator * 1 - currentValueIs * 1;
    // console.log(afterOperator);
  }
  document.getElementById("display").innerHTML = afterOperator;
  secDisplay = "";
};

const equalIs = (equalId) => {
  if (operator == "+") {
    addition(operator);
  } else if (operator == "-") {
    subtraction(operator);
  }
};
