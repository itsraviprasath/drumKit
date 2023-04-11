for(var i = 0; i < document.querySelectorAll(".drum").length ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        animation(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    animation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            const tom_1 = new Audio("sounds/tom-1.mp3")
            tom_1.play()
            break;
        case "a":
            const tom_2 = new Audio("sounds/tom-2.mp3")
            tom_2.play()
            break;
        case "s":
            const tom_3 = new Audio("sounds/tom-3.mp3")
            tom_3.play()
            break;
        case "d":
            const tom_4 = new Audio("sounds/tom-4.mp3")
            tom_4.play()
            break;
        case "j":
            const snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case "k":
            const crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "l":
            const kick_bass = new Audio("sounds/kick-bass.mp3")
            kick_bass.play()
            break;
        default:
            break;
    }
}

function animation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){document.querySelector("." + key).classList.remove("pressed")}, 100)
}