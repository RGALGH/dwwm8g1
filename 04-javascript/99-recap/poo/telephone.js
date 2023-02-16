export default class Telephone {
	//je defini les carateristiques de la classe telephone
	static telType = "smartphone";
	nom = "";
	couleur = "";
	#poids = 0;
	marque = "";
	taille = "";
	cpu = "";

	//je créer le contructeur de la classe telephone, qui me permettera d'utiliser le mot clé new
	constructor(nom, couleur, poids, marque, taille, cpu) {
		this.nom = nom;
		this.couleur = couleur;
		this.poids = poids;
		this.marque = marque;
		this.taille = taille;
		this.cpu = cpu;
	}

	//je créer les geter/seter de la classe telephone
	get couleur() {
		return this.couleur;
	}

	set couleur(couleur) {
		this.couleur = couleur;
	}

	get poids() {
        if(roleUser === "admin") {

		return this.poids;
        }
	}

	set setPoids(poids) {
        //avant de changer le poids, on vérifie que le poids est bien un entier
        if (isNaN(poids)) {

            return false;
        }
		this.poids = poids;
	}

	get marque() {
		return this.marque;
	}

	set marque(marque) {
		this.marque = marque;
	}

	get taille() {
		return this.taille;
	}

	set taille(taille) {
		this.taille = taille;
	}

	get cpu() {
		return `${this.name} a le cpu ${this.cpu}`;
	}

	set cpu(cpu) {
		this.cpu = cpu;
	}

	//je créer les méthodes de la classe telephone
	demarer() {
		console.log(`le ${this.nom} a démarré`);
	}

	sonner() {
		console.log(`le ${this.nom} sonne`);
	}

	pleurer() {
		console.log(`le ${this.nom} pleure`);
	}

	eteindre() {
		console.log(`le ${this.nom} s'eteint paisiblement`);
	}

	tomber(hauteur) {
		console.log(`le ${this.nom} tombe de ${hauteur} cm de haut, il s'est cassé`);
	}

	envoyerSMS(msg) {
		console.log(`le ${this.nom} a envoyé le message ${msg}`);
	}
}
