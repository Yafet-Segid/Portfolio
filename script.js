function myFun() {
  let darkMode = document.body;
  darkMode.classList.toggle("dark_mode");
}

let twitterHover = document.querySelector(".twitterHover");

twitterHover.addEventListener("mouseover", function () {
  twitterHover.src = "image/twitter.gif";
});
twitterHover.addEventListener("mouseleave", function () {
  twitterHover.src = "image/twitter.png";
});

let todoHover = document.querySelector(".todoHover");

todoHover.addEventListener("mouseover", function () {
  todoHover.src = "image/todo.gif";
});
todoHover.addEventListener("mouseleave", function () {
  todoHover.src = "image/todo.jpg";
});

let quoteHover = document.querySelector(".quoteHover");

quoteHover.addEventListener("mouseover", function () {
  quoteHover.src = "image/Quote.gif";
});
quoteHover.addEventListener("mouseleave", function () {
  quoteHover.src = "image/quote1.png";
});
