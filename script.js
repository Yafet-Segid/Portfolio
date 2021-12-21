function myFun() {
  let darkMode = document.body;
  darkMode.classList.toggle("dark_mode");
}


let myVideo = document.querySelectorAll(".video");

for (let i = 0; i < myVideo.length; i++) {
 myVideo[i].addEventListener("mouseover", function () {
   this.play();
   
   
 })
 myVideo[i].addEventListener("mouseleave", function () {
  this.pause();
  this.currentTime = 0;
  
})
  
}
