const clicked = (btnId) => {
  document.getElementById("display").innerHTML =
    document.getElementById(btnId).id;
};

let displayedNumber = document.getElementById("display").innerText;
document.getElementById("display").innerHTML = displayedNumber;
console.log(displayedNumber);
