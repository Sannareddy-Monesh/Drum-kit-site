
var drumButtons = document.querySelectorAll(".drum"); // return list of all buttons with class drum

// creating an object and mapping each button with respective sound to play when clicked
const soundMap = {
        "w" : "sounds/tom-1.mp3", "a" : "sounds/tom-2.mp3", "s" : "sounds/tom-3.mp3",
        "d" : "sounds/tom-4.mp3", "j" : "sounds/snare.mp3", "k" : "sounds/crash.mp3",
        "l" : "sounds/kick-bass.mp3"
};


// iterating through the buttons and adding event listeners.
for (var i = 0; i < drumButtons.length; i++){

    drumButtons[i].addEventListener("click", function (){ // adding event listener click to each button.

            buttonAnimation(this.classList[0]);
            var audio = new Audio(soundMap[this.classList[0]]); // this refers to particular btn or curr btn.
            audio.play(); // plays the audio
    } );

}


// adding keyboard event listeners 
document.addEventListener("keydown", function(event){
    buttonAnimation(event.key);
    var audio = new Audio(soundMap[event.key]);
    audio.play();
});

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setInterval(function (){
        activeButton.classList.remove("pressed");
    }, 200);
}