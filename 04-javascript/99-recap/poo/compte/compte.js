export default class Compte {
	//* properties
	#somme;
	#taux;

	//* constructeur
	constructor(somme = 0, taux = 0) {
		this.#somme = somme;
		this.#taux = taux;
	}

	//* get/set
	get getSomme() {
		return this.#somme;
	}

	set setSomme(somme) {
		this.#somme = somme;
	}

	get getTaux() {
		return this.#taux;
	}

	set setTaux(taux) {
		this.#taux = taux;
	}

	//* méthodes
	/**
	 * permet d'afficher le compte
	 * @returns string
	 */
	affiche() {
		return `Compte | somme ${this.getSomme} € | taux : ${this.getTaux} %`;
	}

	/**
	 * Permet d'ajouter de l'argent sur le compte
	 * @param {float} montant
	 * @returns string
	 */
	depot(montant) {
		this.setSomme = this.getSomme + montant;
		return `après dépôt de ${montant} € : ${this.affiche()}`;
	}

	/**
	 * permet de retirer une somme du compte
	 * @param {float} montant
	 * @returns string
	 */
	retrait(montant) {
		if (montant > this.getSomme) {
			return "il n'y a pas assez d'argent sur le compte";
		}

		//si ok maj du montant
		this.setSomme = this.getSomme - montant;
		return `après retrait de ${montant} € : ${this.affiche()}`;
	}

	/**
	 * permet de calcul les interets reçu par le compte
	 * @param {float} montant
	 * @returns string
	 */
	interet() {
		//interets = taux x somme / 100
		return (
			"Interêt généré sur 1 an : " + (this.getTaux * this.getSomme) / 100 + " €"
		);
	}
}
