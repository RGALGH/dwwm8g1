export default class Telephone {
	//je defini les carateristiques de la classe telephone
	static telType = "smartphone";
	#nom = "";
	#couleur = "";
	#poids = 0;
	#marque = "";
	#taille = "";
	#cpu = "";

	//je créer le contructeur de la classe telephone, qui me permettera d'utiliser le mot clé new
	constructor(nom, couleur, poids, marque, taille, cpu) {
		this.#nom = nom;
		this.#couleur = couleur;
		this.#poids = poids;
		this.#marque = marque;
		this.#taille = taille;
		this.#cpu = cpu;
	}

	//je créer les geter/seter de la classe telephone
    get getNom() {
		return this.#nom.toUpperCase();
	}

	set setNom(nom) {
		this.#nom = nom;
	}
      
	get getCouleur() {
		return this.#couleur;
	}

	set setCouleur(couleur) {
		this.#couleur = couleur;
	}

	get getPoids() {
		return this.#poids;
	}

	set setPoids(poids) {
        //avant de changer le poids, on vérifie que le poids est bien un entier
        if (isNaN(poids)) {
            return false;
        }
		this.#poids = poids;
	}

	get getMarque() {
		return this.#marque;
	}

	set setMarque(marque) {
		this.#marque = marque;
	}

	get getTaille() {
		return this.#taille;
	}

	set setTaille(taille) {
		this.#taille = taille;
	}

	get getCpu() {
		return `${this.#nom} a le cpu ${this.#cpu}`;
	}

	set setCpu(cpu) {
		this.#cpu = cpu;
	}

	//je créer les méthodes de la classe telephone
	demarer() {
		console.log(`le ${this.getNom} a démarré`);
	}

	sonner() {
		console.log(`le ${this.getNom} sonne`);
	}

	pleurer() {
		console.log(`le ${this.getNom} pleure`);
	}

	eteindre() {
		console.log(`le ${this.getNom} s'eteint paisiblement`);
	}

	tomber(hauteur) {
		console.log(`le ${this.getNom} tombe de ${hauteur} cm de haut, il s'est cassé`);
	}

	envoyerSMS(msg) {
		console.log(`le ${this.getNom} a envoyé le message ${msg}`);
	}
}
