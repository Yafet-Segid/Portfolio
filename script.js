// let imgToggle = document.querySelector(".btn");

function myFun() {
  let darkMode = document.body;
  darkMode.classList.toggle("dark_mode");
}

// function imgToggle() {
//   let imageDarkMode = document.imgToggle;
//   imageDarkMode.classList.toggle("imgToggle");
// }

function phoneNumber() {
  let result = confirm("Call : 713-922-8269");
  if (result == true) {
    window.location = "tel:713-922-8236";
  }
}
