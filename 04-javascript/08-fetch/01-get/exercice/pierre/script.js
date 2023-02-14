//je declare mes variables
const heroesLst = document.querySelector("#heroesLst"); // la liste select
const lstUrl = "./../../hero.json"; // le fichier json a lire

// on récupère le resultat du fetch (les données json)
const handleHeroesData = (responseText) => {
	// si la réponse est ok
	if (responseText.ok) {
		responseText
			.json() // je transforme la réponse en json
			.then(addHeroes) // j'appelle la fonction addHeroes
			.catch((error) => console.error(error)); // j'attape l'erreur pour l'afficher en console
	} else {
		//si ma réponse n'est pas ok, j'affiche la raison en console
		console.error(responseText.statusText);
	}
};

// me permet d'ajouter les heroes dans la liste select
function addHeroes(responseText) {
	//je vide la liste select pour eviter les cumuls de noms
	heroesLst.innerHTML = "";
	//pour chaque membre de l'équipe
	for (member of responseText.members) {
		//je créer une copie de mon héros pour l'isoler du reste de l'équipe
        const hero = Object.create(member)
		//je créer une nouvelle option pour mon select
		const opt = document.createElement("option");
		// je lui assigne le nom du héros
		opt.textContent = hero.name;
		//je lui associe une action sur le click
		opt.onclick = () => {
			//aficher le détail du héros
			displayHeroes(hero);
		};
		// j'ajoute la ligne a mon select
		heroesLst.appendChild(opt);
	}
}
// fonction appelez sur le click pour afficher les détails du héros
const displayHeroes = (hero) => {
	//je recupere mon main et je lui ajoute la fiche du héros
	document.querySelector("main").innerHTML = `
    <section>
        <h1>${hero.name}</h1>
        <h2>${hero.secretIdentity}</h2>
        <h3>${hero.age}</h3>
        <p>Pouvoirs : </p>
        <ul>
        </ul>
    </section>
    `;
    
	// je parcours tous les pouvoirs du héros
	for (power of hero.powers) {
		//je créer une nouvelle ligne
		const li = document.createElement("li");
		//j'affiche le nom du pouvoir
		li.textContent = power;
		//j'ajoute la ligne au select
        document.querySelector("ul").appendChild(li);
	}

};

//lire mon fichier json, puis execute la fonction handleHeroesData()
fetch(lstUrl).then(handleHeroesData);
