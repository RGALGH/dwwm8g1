/**
 * EXO feu:
 * Créer un feu de circulation qui restera 3 seconde au vert
 *      PUIS qui restera 1 seconde au jaune,
 *      PUIS qui restera 2 seconde au rouge.
 *      PUIS se répètera à nouveau.
 * Tout cela à l'aide de promesse.
 */

const lights = document.querySelectorAll('#trafficLight > section');
console.log(lights);

function changeColor(index, resolve){
    let colors = ["red", "orange", "green"];
    lights.forEach((l, i)=>{
        l.style.backgroundColor = i != index ? "": colors[i]
    })
    resolve();
}
function switchPromise(time, i){
    return new Promise(resolve=>{
        setTimeout(changeColor, time, i, resolve);
    })
}

function step(){
    switchPromise(2000, 2)
        .then(()=>switchPromise(3000, 1))
        .then(()=>switchPromise(1000, 0))
        .then(()=>step());
}
step()