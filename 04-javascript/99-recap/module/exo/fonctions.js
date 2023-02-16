/**
 * permet de faire une addition
 * @param {int} a
 * @param {int} b
 * @returns int
 */
export default function addition(a, b) {
	// je renvoi le résultat de l'opération, je ferai l'affichage sur l'autre fichier
	return a + b;
}

/**
 * permet de tester le signe d'un nombre
 * @param {int} nombre
 * @returns string
 */
export function signe(nombre) {
	if (nombre > 0) {
		return "positif";
	} else {
		if (nombre < 0) {
			return "négatif";
		} else {
			return "neutre (0)";
		}
	}
}

/**
 * permet de dire bonjour à n'importe qui
 * @param {string} nom
 * @returns string
 */
export function bonjour(nom) {
	return `Bonjour ${nom}!`;
}
