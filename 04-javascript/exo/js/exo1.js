//let autorise le changement de valeur pendant l'execution
let prenom = prompt("Donnez moi un prenom");
let nom = prompt("Donnez moi un nom");

// const resultat = document.getElementById('resultat')
// const test = document.getElementsByClassName('test')
// const toto = document.getElementsByName('name');

//const pour constante => ne permet pas de changer de valeur pendant l'execution
//querySelector => permet de cibler un element HTML (le 1er) avec les mêmes selecteurs qu'en CSS
const resultat = document.querySelector("#resultat"); //je cible un element par son id
const test = document.querySelector(".test"); // par sa class css
//querySelectorAll => recupere tout les elements correspondant au selecteur (pluieur div dans cet exemple)
const toto = document.querySelectorAll("div"); // par le nom de balise

let nomMaj = nom.toUpperCase(); // ja passe le contenu de la nom en majuscule

//j'affiche le resultat obtenu dans ma balise #resultat
resultat.textContent = prenom + " " + nomMaj;

// function strLcFirst(nomAmodifier) {
// 	return (nomAmodifier + "").charAt(0).toUpperCase() + nomAmodifier.substr(1);
// }
