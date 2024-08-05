let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  optn = document.querySelector(".options");
  optn.classList.toggle("active");
};

let logol = document.querySelector(".logo");
logol.onmouseover = function () {
  this.style.color = "rgb(157, 92, 221)";
};

logol.onmouseout = function () {
  this.style.color = "black";
};
