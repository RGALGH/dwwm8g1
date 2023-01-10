/*
 * Faire un script qui demande l'heure, la minute et la seconde courante
 * à l'utilisateur
 * ensuite le script affichera l'heure qu'il sera une seconde plus tard
 */

// on recupere l'heure courante
// let h = parseInt(prompt("Quelle heure est il?")),
// 	m = parseInt(prompt("Quelle minutes est il?")),
// 	s = parseInt(prompt("Quelle seconde est il?"));
let h = -1,
	m = -1,
	s = -1;
while (h < 0 || h > 24) {
	h = parseInt(prompt("Quelle heure est il (dois être compris entre 0 et 24) ?"));
}
while (m < 0 || m > 60) {
	m = parseInt(prompt("Quelle minute est il (dois être compris entre 0 et 24)?"));
}
while (s < 0 || s > 60) {
	s = parseInt(prompt("Quelle seconde est il (dois être compris entre 0 et 24)?"));
}

// je fais le calcul de l'heure dans 1 seconde
s++; // j'ajoute une seconde

//je test l'impact de cet ajout
//Seconde
if (s >= 60) {
	// si seconde > ou = à 60
	m++; // j'avance d'une minute
	s = 0; // je reviens à 0 seconde
}
//Minute
if (m >= 60) {
	// si minute > ou = à 60
	h++; // j'avance d'une heure
	m = 0; // je reviens à 0 minute
}
//Heure
if (h >= 24) {
	h = 0; // je reviens à 0 heure
}

// quand mon traitement est terminé, j'affiche le résultat
const msg = `dans une seconde il sera ${h}h ${m}m ${s}s`;
console.log(msg);
document.querySelector("#resultat").textContent = msg;
