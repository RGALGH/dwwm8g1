// afficher une info a mon utilisateur

// alert("Hello world !");
// alert("hello2");

//! la selection d'objet avec document.querySelector("selecteurCSS")
document.querySelector("#result").textContent = "Hello world !"; //recuperer la balise HTML ayant pour id "result" // et je lui assigne le text "Hello world !"

//! les variables
let chiffre = 5; // je créer une variable nommé "chiffre", et je lui assigne la valeur 5
// je n'hesite pas a créer une variable avec un nom parlant et long car vsCode fera de l'autocompletion quand j'aurai besoin d'appeler ma variable
let nomDeVariableTresLong = "du texte"; //je créer un variable avec du texte

console.log(nomDeVariableTresLong);

nomDeVariableTresLong = "autre valeur";

console.log(nomDeVariableTresLong); //ligne dupliqué avec shift+alt+flecheDuBas et déplacé avec alt+flecheBas

let flottant = 1.23456; // j'utilise le . au lieu de la , pour les chiffre a virgule

let valeurVrai = true;

let arr = ["du texte", 15, true];

console.log(arr);

let obj = {
	txt: "du texte", //valeur txt
	num: 15, // val numérique
	vrai: true, //val booléene
};

console.log(obj);

//! les constantes, sont des variable auxquels on ne peut assigner qu'une seule valeur
const pi = 3.14159;

console.log(pi);

// pi = 9.87654; // provoquera une erreur => une constante ne peut pas changer de valeurs en cours de route
// console.log(pi);

// quel interet? le temps d'affichage d'un constante est plus rapide qu'une variable let et la consommation de mémoire est moins gourmande

//par exemple on aime bien mettre nos balise HTML en constante (oui une balise HTML ne change pas en cours de route)
const result = document.querySelector("#result"); // recupere ma balise HTML et l'asssigne a une constante

// result.textContent = " nouveau texte"; // je remplace le contenu text de ma balise result
//textContent permet de changer le texte de la balise
result.textContent += " nouveau texte"; // j'ajoute un nouveau morceaux à ma phrase
result.classList.add("toto"); // permet d'ajouter une class css a ma balise result
console.log(result.childElementCount); // permet de compter le nombe d'enfant dans la balise

//.le innerHTML permet de modifier le code HTML de la balise
document.querySelector("#para").innerHTML =
	'test span<span class="test"> ceci est un text </span>';

/*
 *on utilise les const quand la valeur ne changera pas en cours de script, et let quand * *la valeur de la variable peut changer en cours de route.
 */

//! la récupération de saisie utilisateur en console : prompt()
const reponse = prompt("Donne moi une valeur");
console.log(reponse);
result.textContent += " " + reponse;
result.textContent += ` ctl : ${reponse}`;

//! rappel sur le si

// if (reponse === "oui") {
// 	// je teste une condition
// 	alert("vous avez dit oui"); // action effectuer si la condition est vrai
// } else {
// 	alert("vous n'avez pas dit oui"); // action si la condition est fausse
// }

//le else n'est pas obligatoire dans un if

//par contre je peux imbriquer plusieurs if
// if (reponse === "oui") {
// 	// je teste une condition
// 	alert("vous avez dit oui"); // action effectuer si la condition est vrai
// } else {
// 	if (reponse === "non") {
// 		alert("vous avez dit non"); // action si la condition est fausse
// 	} else {
// 		alert("vous n'avez dit ni oui ni non"); // action si la condition est fausse
//     }
// }

//ou utiliser des conditions multiples (avec && ou ||)
if (reponse === "oui" || reponse === "non") {
	// je teste une condition
	alert("vous avez dit oui ou non"); // action effectuer si la condition est vrai
} else {
	alert("vous n'avez dit ni oui ni non"); // action si la condition est fausse
}
