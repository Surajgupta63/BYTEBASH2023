
let song = document.querySelector("#songs");
let ctrlIcon = document.querySelector("#ctrlIcon ");
let progress = document.querySelector(".progress-bar");

let ncs = document.querySelector("#ncs");
let img = document.querySelector(".card-img");
let card = document.querySelector(".card");

function playMusic(){
    ncs.play();
}

card.addEventListener("click", playMusic());

song.onloadedmetedata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");

    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("pause");
    ctrlIcon.classList.remove("player-controls-icon");

}



// function playMusic(){
//     if(card.classList.contains("card")){
//         ncs.play();
//     }
// }
