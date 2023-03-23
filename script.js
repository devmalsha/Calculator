let firstNum = "";
let secNum = "";
let currentValue = "";
let operator = "";
let secDisplay;
const clicked = (idIs) => {
  secNum = document.getElementById(idIs).innerHTML;
  let display = document.getElementById("display").innerHTML;
  //+
  if (operator) {
    if (secDisplay) {
      secDisplay = secDisplay * 10 + secNum * 1;
      console.log(secDisplay);
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
      document.getElementById("display").innerHTML = secNum; //secnum - 34
    }
  }
};

const doAddition = (sumId) => {
  operator = document.getElementById(sumId).innerHTML;
  let ele1 = document.getElementById("display").innerHTML;

  // equal(ele3);
};

const doSubstraction = (subId) => {
  operator = document.getElementById(subId).innerHTML;
  let ele1 = document.getElementById("display").innerHTML;

  // equal(ele3);
};

const equal = (result) => {
  document.getElementById("display").innerHTML = result;
};
