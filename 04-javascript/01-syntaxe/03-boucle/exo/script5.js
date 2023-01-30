"use strict";
//! ---------------------- EXO 5.1 ---------------------
/*
 * écrire un algorithme qui demande à l'utilisateur un nombre compris entre 1 et 3
 * jusqu'à ce que la réponse convienne.
 */
// let x;

// do {
// 	x = prompt("Donne moi un chiffre entre 1 et 3.");
// } while (x < 1 || x > 3);
//! ---------------------- EXO 5.2 ---------------------
/*
 * Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu'à ce que
 * la réponse convienne, en cas de réponse superieur à 20, on ferra apparaître un message
 * "Plus petit !" et inversement "plus grand !" si inférieur à 10.
 */
// let n = 0,
// 	msg;
// while (n < 10 || n > 20) {
// 	n = parseInt(prompt("Donne moi un chiffre entre 10 et 20."));
// 	msg =
// 		n < 10 || n > 20
// 			? "votre saisie doit être compris entre 10 et 20!"
// 			: `votre réponse est coorecte : ${n}`;
// 	/* équivalent à 
//     if(n < 10 || n > 20){
//         m = "votre saisie doit être compris entre 10 et 20!"
//     }
//     else{
//         m = `votre réponse est coorecte : ${n}`;
//     }
//     */
// 	console.log(msg);
// }
//! -------------------- EXO 5.3 ---------------------
/* Demander un nombre à l'utilisateur, puis afficher les dix nombres suivants. */
let z = parseInt(
	prompt("Donne moi un nombre et je te répondrais les dix suivant.")
);

// for (let i = z + 1; i <= z + 10; i++) {
// 	console.log(i);
// }

//! -------------------- EXO 5.4 ---------------------
/* 
*Ecrire un algorithme qui demande un nombre puis écrit la table de multiplication
* de ce nombre. 
*/
// let w = prompt(
// 	"Donne moi le nombre dont tu veux voir la table de multiplication"
// );
// for (let i = 1; i < 10; i++) {
// 	console.log(`${w} * ${i} = ${w * i}`);
// }

//! -------------------- EXO 5.5 ---------------------

/* 
* Ecire un algorithme qui demande un nombre puis calcul la factoriel de ce nombre
* (le 5.5 demande la même chose mais avec des additions plutôt que des multiplications) 
*/
// let v = prompt("Donne moi un nombre !"),
// 	total = 1;
// for (let i = 1; i <= v; i++) {
// 	// console.log("Ittération "+ i+ " :");
// 	// console.log("total = "+ total + "*" +i);
// 	total *= i; // total = total *i;
// }
// console.log("La factoriel de " + v + " vaut " + total);
// /*
// total == 1;
// i == 1;
// v = 5;
// première boucle :
// total = 1*1;
// seconde boucle:
// total = 1*2
// troisième boucle:
// total = 2*3
// Quatrième boucle :
// total = 6*4
// Cinquième boucle:
// total = 24*5
// i == 6 donc étant superieur à v, la boucle s'arrête
// J'affiche ensuite total qui ici vaut 120
// */
//! -------------------- EXO 5.6 ---------------------
/* 
* Ecrire un algorithme qui demande successivement 20(5 parceque la flemme) nombres
* et qui lui dise ensuite quel était le plus grand parmi ces nombres.
* Bonus : Indiquer la position à laquelle a été donné ce nombre
*/
// let nb, max, pos;
// for (let i = 1; i <= 5; i++) {
// 	nb = parseInt(prompt("Donne moi un fichu nombre !"));
// 	if (i == 1 || max < nb) {
// 		max = nb;
// 		pos = i;
// 	}
// }
// console.log(
// 	`Le nombre le plus grand est ${max} et a été donné à la saisie numéro ${pos}`
// );
//! -------------------- EXO 5.7 ---------------------
/* 
* même exercice que précédement mais on arrête de demander des nombres que si l'utilisateur
* entre un 0 
*/
let nb, max, pos, i=1;
nb=1;
while (nb != 0) {
	nb = parseInt(prompt("Donne moi un fichu nombre !"));
	if (i == 1 || max < nb) {
		max = nb;
		pos = i;
	}
	i++;
} 
console.log(
	`Le nombre le plus grand est ${max} et a été donné à la saisie numéro ${pos}`
);
