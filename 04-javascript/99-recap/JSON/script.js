const personne = {
	prenom: {
		fra: "Julien",
		eng: "Julian",
	},
	age: 28,
	nom: "dupont",
	pays: "France",
	ville: "Paris",
	telephone: "0123456789",
	adresse: "12 rue de l'Avignon",
	confirmation: false,
};

//je cible mon h1 et je lui assigne le prenom de la personne
document.querySelector("header > h1").textContent =
	personne.prenom.fra + " " + personne.nom;
document.querySelector("header > h2").textContent = personne.prenom.eng;

document.querySelector("#result").innerHTML = `
    <p>Age : ${personne.age} ans</p>
    <p>Adresse : ${personne.adresse}</p>
    <p>Ville : ${personne.ville}</p>
    <p>Pays : ${personne.pays}</p>
    <p>Telephone : ${personne.telephone}</p>
    <p>Confirmation : ${personne.confirmation === false ? "non" : "oui"}</p>
    `;

const personneStr = JSON.stringify(personne);
document.querySelector("#jsonStringify").textContent = personneStr;
console.log(personneStr);

