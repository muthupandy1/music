// alert("party starts")

var noOfDrum = document.querySelectorAll(".drum").length; //for select class, dot used (.drum);

// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick(){
//     alert("i clicked")
// }


for (var i = 0; i < noOfDrum; i++) {

    //mouse click
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });


}


//keyboard event press
document.addEventListener("keypress", function (event) {
    // alert("key pressed");
    console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
});


//audio location 
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            console.log(this.innerHTML);
            // alert("button clicked");
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            console.log(this.innerHTML);
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            console.log(this.innerHTML);
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            console.log(this.innerHTML);
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            console.log(this.innerHTML);
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            console.log(this.innerHTML);
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            console.log(this.innerHTML);
            break;
    }
}

//active button
function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function () { activeButton.classList.remove("pressed") }, 100);

}