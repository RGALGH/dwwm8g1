"use script";
// Je selectionne mes différents éléments.
const iaCards = document.querySelectorAll(".zoneIA .card"),
playerCards = document.querySelectorAll(".zonePlayer .card"),
score = document.querySelector(".score"),
message = document.querySelector(".message");
// Version animate :
let animations = [];
const keyframes = {transform: ["rotateY(180deg)", "rotateY(0deg)"]},
animeOptions = {duration: 800, easing: "cubic-bezier(0.86, 0, 0.07, 1)", fill:"forwards"};
// fin version animate
// Je déclare mes variables.
let sIA = 0, sPL = 0, play, iaC, ia, pl, taux={p:1, f:1, c:1, t:3};
// J'ajoute un évènement au clique sur les cartes du joueur.
playerCards.forEach(c=>c.addEventListener("click", check));
// Je lance mon jeu.
start();
function start(){
    play = true
    message.textContent = "Choisissez une carte !";
    // Je retire la classe reveal de toute les cartes.
    // version css :
    // playerCards.forEach(c=>c.classList.remove("reveal"));
    // iaCards.forEach(c=>c.classList.remove("reveal"));
    // version animate :
    animations.forEach(a=>{
        a.reverse();
        delete a;
    })
    animations = [];
}
function reveal(card){
    // J'ajoute la classe reveal sur la carte donné en paramètre.
    // version css :
    // card.classList.add("reveal");
    // version animate :
    animations.push(card.animate(keyframes, animeOptions));
    // Je récupère  le symbole de la carte.
    pl = card.dataset.sign;
    // Mon IA selectionne une carte.
    select();
    // Je récupère le symbole de la carte sélectionné.
    ia = iaCards[iaC].dataset.sign;
    // Je révèle la carte de l'ia.
    // version css :
    // iaCards[iaC].classList.add("reveal");
    // version animate :
    animations.push(iaCards[iaC].animate(keyframes, animeOptions));
}
function select(){
    // On peut remplacer tout cette fonction par :
    // iaC = Math.floor(Math.random()*3);
    // Je récupère un nombre aléatoire entre 0 et 1.
    let r = Math.random(),
    // Je calcul le taux de pierre par rapport aux autres coups.
    tp = taux.p/taux.t;
    // Je calcul le coup joué par l'ia
    iaC = r<tp? 1 : r<(taux.f/taux.t + tp)? 2:0;
    // J'augmenté le coup joué par le joueur de 1 et le total de 1.
    taux[pl]++;
    taux.t++;
}
function check(e){
    if(play){
        play = false;
        // J'attend une seconde avant de relancer la partie.
        setTimeout(start, 1000);
        // Mon évènement ayant lieu sur le dos de ma carte, je selectionne son parent.
        reveal(e.target.closest(".card"));
        if(ia === pl){
            message.textContent = "Égalité !";
            return;
        }
        else if((ia==="c" && pl==="p")||(ia==="p" && pl==="f")||(ia==="f"&&pl==="c")){
            message.textContent = "Gagné !";
            sPL++;
        }
        else{
            message.textContent = "Perdu !";
            sIA++;
        }
        score.textContent = `IA : ${sIA} | Vous : ${sPL}`;
    }
}