let firstNum = "";
let secNum = "";
let currentValue = "";
let operator = "";
const clicked = (idIs) => {
  secNum = document.getElementById(idIs).id;
  let display = document.getElementById("display").innerHTML;
  if (operator == "+") {
  } else {
    if (display == 0) {
      document.getElementById("display").innerHTML = secNum;
    } else if (display !== 0) {
      secNum = display * 10 + secNum * 1;
      document.getElementById("display").innerHTML = secNum;
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
