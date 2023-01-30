//! ---------------------- EXO 5.1 ---------------------
/*
 * écrire un algorithme qui demande à l'utilisateur un nombre compris entre 1 et 3
 * jusqu'à ce que la réponse convienne.
 */

// //je demande une 1ere fois a mon utilisateur
// let nombre = parseInt(prompt("Donne moi un chiffre compris entre 1 et 3"));

// //je teste mon nombre, tant qu'il remplie pas les criteres, la question sera posée en boucle
// while (nombre<1 || nombre>3){
//     nombre = parseInt(prompt("Erreur, merci de me donner un chiffre compris entre 1 et 3"));
// }

// alert('Merci de votre participation');

//! ---------------------- EXO 5.2 ---------------------
/*
 * Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu'à ce que
 * la réponse convienne, en cas de réponse superieur à 20, on ferra apparaître un message
 * "Plus petit !" et inversement "plus grand !" si inférieur à 10.
 */

// //je demande une 1ere fois a mon utilisateur
// let nombre = parseInt(prompt("Donne moi un chiffre compris entre 10 et 20"));

// //je teste mon nombre, tant qu'il remplie pas les criteres, la question sera posée en boucle
// while (nombre < 10 || nombre > 20) {
//     //si plus petit que 10
// 	if (nombre < 10) {
// 		nombre = parseInt(
// 			prompt(
// 				"Erreur, trop petit, merci de me donner un chiffre supérieur ou égale à 10"
// 			)
// 		);
// 	} else {
//         //si plus grand que 20
//         nombre = parseInt(
// 			prompt(
// 				"Erreur, trop grand, merci de me donner un chiffre inférieur ou égale à 20"
// 			)
// 		);
//     }
// }

// alert("Merci de votre participation");

//! -------------------- EXO 5.3 ---------------------
/* Demander un nombre à l'utilisateur, puis afficher les dix nombres suivants. */
// const nombre = parseInt(
// 	prompt("Donne un chiffre, et je te donnerai les 10 suivants")
// );
// for (let i = nombre + 1; i <= nombre + 10; i++) {
//     console.log(i);
// }

//! -------------------- EXO 5.4 ---------------------
/*
 *Ecrire un algorithme qui demande un nombre puis écrit la table de multiplication
 * de ce nombre.
 */
// const nombre = parseInt(
// 	prompt("Donne un chiffre, et je te donnerai sa table de multiplication")
// );
// for (let i = 1; i <= 10; i++) {
//     console.log(` ${nombre} * ${i} = ${nombre*i} `);
// }

//! -------------------- EXO 5.5 ---------------------
/*
 * Ecire un algorithme qui demande un nombre puis calcul la factoriel de ce nombre
 * (le 5.5 demande la même chose mais avec des additions plutôt que des multiplications)
 * exemple factorielle de 5 = 5*4*3*2
 */
const nombre = parseInt(
	prompt("Donne un chiffre, et je te donnerai sa factorielle de multiplication")
);
let factoriel = nombre;
for (let i = nombre - 1; i >= 2; i--) {
	factoriel = factoriel * i;
}
console.log(`la factorielle de ${nombre} = ${factoriel}`);
