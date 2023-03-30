let firstNum = "";
let secNum = "";
let currentValue = "";
let operator = "";
let secDisplay;
let display;
let sumNumber1;
let sumIs;
let afterOperator;
let newVa;
const clicked = (idIs) => {
  secNum = document.getElementById(idIs).innerHTML;
  display = document.getElementById("display").innerHTML;

  if (operator) {
    console.log(operator);
    afterOperator = document.getElementById("display").innerHTML;
    console.log(afterOperator);
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

// const lastClickedOperator = (clickedOperator) => {
//   let clickedOperatorIs = document.getElementById(clickedOperator).innerHTML;
//   if (clickedOperatorIs == "+") {
//     return "+";
//   } else if (clickedOperatorIs == "-") {
//     return "-";
//   } else {
//     return false;
//   }
// };

const addition = (sumId) => {
  operator = document.getElementById(sumId).innerHTML;
  beforeOperator = document.getElementById("display").innerHTML;

  if (!afterOperator) {
    afterOperator = 0;

    beforeOperator = afterOperator * 1 + beforeOperator * 1;

    document.getElementById("display").innerHTML = beforeOperator;
  } else {
    beforeOperator = afterOperator * 1 + beforeOperator * 1;

    document.getElementById("display").innerHTML = beforeOperator;
  }

  secDisplay = "";
};

const addOperation = (beforeOperator) => {
  beforeOperator = this.beforeOperator;
};
const doSubstrac = (subId) => {
  operator = document.getElementById(subId).innerHTML;
  secDisplay = "";
};

// function operations() {
//   if (operator == "+") {
//     let num1 = document.getElementById("display").innerHTML;
//     num1 = num1 * 1 + newVa * 1;
//     document.getElementById("display").innerHTML = num1;
//   }
// }
