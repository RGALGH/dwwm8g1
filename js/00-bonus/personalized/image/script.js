"use strict";

const imgs = document.querySelectorAll(".img-container");
imgs.forEach(cont=>{
    // cont.addEventListener("mouseenter", showControls)
    // cont.addEventListener("mouseleave", hideControls)
    cont.querySelector("button").addEventListener("pointerdown", fullscreen.bind(cont))
})
function fullscreen(){
    if(document.fullscreenElement){
        document.exitFullscreen();
    }else{
        this.requestFullscreen();
    }
}