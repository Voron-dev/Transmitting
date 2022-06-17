Math.clamp = (num, min, max) => Math.min(Math.max(num, min), max)

class KittyPost {
    constructor(primaryText, file, comment){
        this.primaryText = primaryText
        this.file = file
        this.comment = comment
    }
}

const kitties = [new KittyPost("KittyTransmitting.com/episode/11", "NatureTapesCover.jpg", "That's just a test lol"),
                 new KittyPost("Welcome to transmittion of kittens №12", "Cat-Piano.mov", "I think this cat is very talented")]
const VideoFormats = ["mp4","mov"]

const Image  = document.getElementById("Image")
const Video  = document.getElementById("Vid")
const Source = document.getElementById("Source")
const PrimaryText = document.getElementById("PrimaryText")
const Comment = document.getElementById("Comment")

var kittyID = kitties.length-1

function UpdateScroll(){
    kittyID = Math.clamp(kittyID, 0, kitties.length - 1)
    const item = kitties[kittyID]
    const fileType = item.file.split(".")[1]
    PrimaryText.innerText = item.primaryText
    Comment.innerText = item.comment
    if (VideoFormats.includes(fileType)) {
        Source.src = item.file;
        Video.load();
        Image.style = "display: none";
        Video.style = "display: inline-block; width: 68%; aspect-ratio: 1 / 1";
    } else {
        Video.pause();
        Video.style = "display: none";
        Image.style = "display: inline-block; width: 68%; aspect-ratio: 1 / 1";
        Image.src = item.file
        Source.src = "";
    }
}

function RollLeft(){
    kittyID--
    UpdateScroll()
}

function RollRight(){
    kittyID++
    UpdateScroll()
}

UpdateScroll()