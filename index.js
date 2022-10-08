var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("I got Clicked");
    // What to do when clicked

    // "this"  keyword finds out the identity of the button which triggers the event listener
    // console.log(this)
    // console.log(this.innerHTML); //to get  element

    // console.log((this.style.color = "white"));
    this.style.color = "white";
  });
}
// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();
