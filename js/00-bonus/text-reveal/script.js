"use strict";

const btnOpa = document.querySelector('#opacity'),
title = document.querySelectorAll("main span"),
btnRes = document.querySelector("#reset");
btnOpa.addEventListener("pointerdown", show);
btnRes.addEventListener("pointerdown", reset);

function show(){
    for(let i = 0; i<title.length; i++){
        setTimeout(()=>title[i].style.opacity = "1",400*(1+i));
    }
}
function reset() {
    for(let i = 0; i<title.length; i++){
        title[i].style.opacity = "0";
    }
}
