// const clicked = (btnId) => {
//   // document.getElementById("display").innerHTML =
//   //   document.getElementById(btnId).id;
//   let num1 = document.getElementById(btnId).innerText;
//   document.getElementById("display").innerHTML = num1;
// };

let ele1 = "";
let ele2 = "";
const clicked = (idIs) => {
  ele2 = document.getElementById(idIs).id;
  let display = document.getElementById("display").innerHTML;
  if (display == 0) {
    document.getElementById("display").innerHTML = ele2;
  } else if (display !== 0) {
    ele2 = display * 10 + ele2 * 1;
    document.getElementById("display").innerHTML = ele2;
  }
};
