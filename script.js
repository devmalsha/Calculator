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
      // afterOperator = document.getElementById("display").innerHTML;
    }
  }
};

const addition = (sumId) => {
  operator = document.getElementById(sumId).innerHTML;
  beforeOperator = document.getElementById("display").innerHTML;
  // if (!afterOperator) {
  //   afterOperator = 0;
  //   afterOperator = afterOperator * 1 + beforeOperator * 1;
  //   console.log(
  //     "After Operator :" +
  //       afterOperator +
  //       " & " +
  //       "Before Operator :" +
  //       beforeOperator
  //   );
  //   document.getElementById("display").innerHTML = afterOperator;
  // } else {
  //   afterOperator = afterOperator * 1 + beforeOperator * 1;
  //   document.getElementById("display").innerHTML = afterOperator;
  // }
  afterOperator = afterOperator * 1 + beforeOperator * 1;
  document.getElementById("display").innerHTML = afterOperator;
  secDisplay = "";
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
