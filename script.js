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
let storingValue="";
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
  currentValueIs = document.getElementById("display").innerHTML;
  if (afterOperator == 0) {
    afterOperator = currentValueIs * 1;
    console.log("afteroperator " + afterOperator);
  } else {
    console.log("Hii");
    afterOperator = afterOperator * 1 + currentValueIs * 1;
  }  
  document.getElementById("display").innerHTML = afterOperator;
  secDisplay = "";
};

const subtraction = (subId) => {
  operator = document.getElementById(subId).innerHTML;
  currentValueIs = document.getElementById("display").innerHTML;
  if (afterOperator == 0) {
    afterOperator = currentValueIs * 1 - afterOperator * 1;
  }
  if (!afterOperator == 0 && currentValueIs > afterOperator) {
    afterOperator = afterOperator * 1 - currentValueIs * 1;
  } else if (!afterOperator == 0 && currentValueIs < afterOperator) {
    afterOperator = afterOperator * 1 - currentValueIs * 1;
  }
  document.getElementById("display").innerHTML = afterOperator;
  secDisplay = "";

};

const multiplication = (multiId) => {
  operator = document.getElementById(multiId).innerHTML;
  currentValueIs = document.getElementById("display").innerHTML;
  if (afterOperator == "") {
    afterOperator = currentValueIs * 1;
  } else {
    afterOperator = currentValueIs * afterOperator;
  }
  document.getElementById("display").innerHTML = afterOperator;
  secDisplay = "";
};

const division = (divId) => {
  operator = document.getElementById(divId).innerHTML;
  currentValueIs = document.getElementById("display").innerHTML;
  if (afterOperator == "") {
    afterOperator = currentValueIs * 1;
  } else {
    afterOperator = afterOperator / currentValueIs;
  }
  document.getElementById("display").innerHTML = afterOperator;
  secDisplay = "";
};

const clearNum = () => {
  afterOperator = 0;  
  document.getElementById("display").innerHTML = 0;
  secDisplay = "";
  // afterOperator = document.getElementById("display").innerHTML;
  // let balanceNum = afterOperator.slice(0, afterOperator.length - 1);
  // document.getElementById("display").innerHTML = balanceNum;
  // if (balanceNum == 0) {
  //   document.getElementById("display").innerHTML = 0;
  // }
};

const memoryServer = () => {
   storingValue = document.getElementById("display").innerHTML; 
   };

const memoryRecall = () => {
  document.getElementById("display").innerHTML=storingValue;  
};

const decimal = () => {
  document.getElementById("display").innerHTML = storingValue;
};

const equalIs = (equalId) => {
  if (operator == "+") {
    addition(operator);
  } else if (operator == "-") {
    subtraction(operator);
  } else if (operator == "*") {
    multiplication(operator);
  } else if (operator == "/") {
    division(operator);
  }
};
