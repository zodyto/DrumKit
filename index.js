// document.querySelectorAll("button")[0].addEventListener("click", handleClick);

// Detecting Button press

var drum = document.querySelectorAll(".drum");

for (var i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", handleClick);
}

function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}


// Detecting Keyboard press

document.addEventListener("keydown", function (event) {
    // alert("Key was pressed!");
    // console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
});

// document.addEventListener("keydown", handleKeyDown);
// function handleKeyDown(event) {
//     makeSound(event.key);
// }


// Play audio

function createAudio(url) {
    var audio = new Audio(url);
    audio.play();
}

function makeSound(char) {
    switch (char) {
        case 'w':
            var url = "sounds/tom-1.mp3"
            createAudio(url);
            break;
        case 'a':
            var url = "sounds/tom-2.mp3"
            createAudio(url);
            break;
        case 's':
            var url = "sounds/tom-3.mp3"
            createAudio(url);
            break;
        case 'd':
            var url = "sounds/tom-4.mp3"
            createAudio(url);
            break;
        case 'j':
            var url = "sounds/snare.mp3"
            createAudio(url);
            break;
        case 'k':
            var url = "sounds/crash.mp3"
            createAudio(url);
            break;
        case 'l':
            var url = "sounds/kick-bass.mp3"
            createAudio(url);
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}