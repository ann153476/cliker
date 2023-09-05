const click = document.querySelector(".click");
const number = document.querySelector(".number");
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed");

let value = 0;
let rotate = 0;
const clickF = (e) => {
  if (rotate < 178) {
    value += 1;
    rotate += 3;
    number.innerHTML = `${value}`;
    arrow.style.transform = `rotate3d(0, 0, 1, ${rotate}deg)`;
  }
};
click.addEventListener("click", clickF);
var intervalID = window.setInterval(myCallback, 1000);
let valueSecond = 0;
function myCallback() {
  if (rotate > 1) {
    speed.innerHTML = `${value - valueSecond}`;
    rotate -= 2;
    arrow.style.transform = `rotate3d(0, 0, 1, ${rotate}deg)`;
    console.log(rotate);
  }
  valueSecond = value;
}
