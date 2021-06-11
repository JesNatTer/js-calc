let numbers = document.getElementById("numbers");
let operator = document.getElementById("operators");
let maindisplay = document.getElementById("maindisplay");
let topdisplay = document.getElementById("topdisplay");
let result;
numbers.addEventListener("click", displayNumber);

function displayNumber(e) {
  if (maindisplay.innerHTML == result) {
    maindisplay.innerHTML = "";
  }
  if (e.target.classList.contains("n9")) {
    maindisplay.textContent = maindisplay.textContent + 9;
  }
  if (e.target.classList.contains("n8")) {
    maindisplay.innerHTML = maindisplay.innerHTML + 8;
  }
  if (e.target.classList.contains("n7")) {
    maindisplay.innerHTML = maindisplay.innerHTML + 7;
  }
  if (e.target.classList.contains("n6")) {
    maindisplay.innerHTML = maindisplay.innerHTML + 6;
  }
  if (e.target.classList.contains("n5")) {
    maindisplay.innerHTML = maindisplay.innerHTML + 5;
  }
  if (e.target.classList.contains("n4")) {
    maindisplay.innerHTML = maindisplay.innerHTML + 4;
  }
  if (e.target.classList.contains("n3")) {
    maindisplay.innerHTML = maindisplay.innerHTML + 3;
  }
  if (e.target.classList.contains("n2")) {
    maindisplay.innerHTML = maindisplay.innerHTML + 2;
  }
  if (e.target.classList.contains("n1")) {
    maindisplay.innerText = maindisplay.innerText + 1;
  }
  if (e.target.classList.contains("n0")) {
    maindisplay.innerHTML = maindisplay.innerHTML + 0;
  }
  if (e.target.classList.contains("clear")) {
    maindisplay.innerHTML = "";
    topdisplay.innerHTML = "";
  }
  if (e.target.classList.contains("thedot")) {
    maindisplay.innerHTML = maindisplay.innerHTML + ".";
  }
}

operator.addEventListener("click", operation);

function operation(e) {
  if (e.target.classList.contains("add")) {
    maindisplay.innerHTML += "+";
  }
  if (e.target.classList.contains("minus")) {
    maindisplay.innerHTML += "-";
  }
  if (e.target.classList.contains("multiply")) {
    maindisplay.innerHTML += "*";
  }
  if (e.target.classList.contains("divide")) {
    maindisplay.innerHTML += "/";
  }
  if (e.target.classList.contains("equals")) {
    result = eval(maindisplay.innerHTML);
    maindisplay.innerHTML = result;
  }
  if (e.target.classList.contains("delete")) {
    maindisplay.innerHTML = maindisplay.innerHTML.slice(0, -1);
  }
}
