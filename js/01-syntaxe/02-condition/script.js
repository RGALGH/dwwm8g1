"use strict";
/* 
Math.random() retourne une valeur comprise entre 0 et 1
*20 pour le multiplier par 20 (on obtient une valeur entre 0 et 20)
Math.floor() arrondi à l'inferieur (on obtient un nombre entier (sans virgule))
*/
console.log(Math.random() * 20);
let x = Math.floor(Math.random() * 20);
console.log(x);
if (x < 10) {
	// On commence avec un if pour vérifier une condition.
	console.log(x + " Est plus petit que 10");
} else if (x > 10) {
	// si le if est faux, on peut mettre ou pas autant de else if qu'on veut pour
	// vérifier autant de conditions supplémentaires
	console.log(x + " Est plus grand que 10");
} else {
	// Et on peut accéssoirement terminer par un else pour gérer tout les cas qui
	// ne correspondent pas aux conditions précédentes.
	console.log("Il vaut 10");
}
// Une ternaire est une condition résumé en une ligne, utile dans le cas où l'on
// a peu de conditions et peu de réponse possible:
// condition? true: false;
let message =
	x <= 10 ? x + " Est plus petit ou égale à 10" : x + " Est plus grand que 10";
console.log(message);
// Attention de ne pas allé trop loin avec les ternaires pour rester visible ici:
// condition ? true : condition? true: false
let m2 =
	x < 10
		? x + " Est plus petit que 10"
		: x > 10
		? x + " Est plus grand que 10"
		: "Il vaut 10";
console.log(message);
/* en if/else classique 
if (x < 10) {
	m2 = x + " Est plus petit que 10";
} else {
	if (x > 10) {
		m2 = x + " Est plus grand que 10";
	} else {
		m2 = `${x} vaut 10`;
	}
}
*/
// ---------------------- SWITCH ------------------------------

let ville = prompt("De quel ville venez-vous?");
ville = ville ?? "pas de ville";
console.log(ville);
// if(ville===undefined){ville="pas de ville"}
// .toLowerCase() transforme toute les lettres d'un string en minuscule
switch (ville.toLowerCase()) {
	case "pas de ville":
		console.log("Pourquoi tu ne veux pas répondre?");
		break;
	// switch compare ce qui est mit entre parenthèse et selectionne le cas qui correspond
	case "paris":
	case "londres":
	case "tokyo":
		// si je met plusieurs cas les un après les autres,
		// Ils effecturont la même action
		console.log("De la capitale donc.");
		break;
	// Le mot clef break indique où doit s'arrêter le cas.
	case "lille":
		console.log("Moule frite et bière");
		break;
	case "roubaix":
		console.log("L'ancienne capitale du textile");
		break;
	case "armentières":
		console.log("Une ville pauvre mais fière");
		break;
	// Default permet de gérer ce que doit faire le switch si aucun cas ne correspond
	default:
		console.log("Je ne connais pas.");
}

/*
if(ville==="paris" || ville === "londre" || ville === "tokyo"){
    console.log("De la capitale donc.");
}
if(ville==="armentières"){
    console.log("Une ville pauvre mais fière");
}
*/
// ---------------------- ?. ------------------
// les caractères ?. permettent le chaînage optionnel.
let obj = {
		info: "Cet objet est un exemple",
		superInfo: { a: "rien" },
	},
	obj2 = null,
	obj3;
/*
    Il permet de vérifier si un élément existe avant de tenter d'accèder
    à ses propriétés.
    si je tente d'accèder à "undefined" ou "null" alors 
    les éléments suivants ne s'executerons pas.
    !ATTENTION, on ne peut pas l'utiliser pour attribuer une valeur.
*/
console.log(
	obj?.info,
	obj?.info?.superInfo,
	obj?.fake?.superInfo,
	obj2?.info,
	obj3?.info
);
// --------------------- ?? -----------------

let a,
	b = undefined,
	c = null,
	d = "Chaussette",
	e = { nom: "Bruno" },
	f = ["test"];
// L'opérateur ?? permet de selectionner le premier élément si il n'est pas
// null ou undefined, sinon il selectionnera le second élément.
console.log(a ?? "coucou");
console.log(b ?? "coucou");
console.log(c ?? "coucou");
console.log(d ?? "coucou");
console.log(e ?? "coucou");
console.log(e.nom ?? "coucou");
console.log(e.prenom ?? "coucou");
console.log(f[0] ?? "coucou");
console.log(f[1] ?? "coucou");
