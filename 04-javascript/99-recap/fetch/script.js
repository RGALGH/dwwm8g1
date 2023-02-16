const urlNameCountrie = "https://restcountries.com/v3.1/name/";
const urlAllCountries = "https://restcountries.com/v3.1/all";

const frmCountry = document.querySelector("#frmCountry");
const resCountry = document.querySelector("#resCountry");
const allCountries = document.querySelector("#allCountries");
const resAllCountries = document.querySelector("#resAllCountries");

frmCountry.onsubmit = (e) => {
	//empeche le rechargement de page
	e.preventDefault();
	//recupere toute les données
	const data = new FormData(frmCountry);
	//recuper le pays seul
	const countryToSearch = data.get("country");
	//fetch l'url qui correspond au pays  exemple: https://restcountries.com/v3.1/name/fr
	fetch(urlNameCountrie + countryToSearch)

	// "https://restcountries.com/v3.1/name/" + "chi"
	// https://restcountries.com/v3.1/name/chi
		.then((res) => {
			// on obient un resultat
			if (res.ok) {
				// si le res est ok
				res
					.json() // on transforme la reponse en json
					.then((data) => {
						// que l'on met dans la variable data
						// console.log(data);
						//je vide la desitnation pour eviter le cumul des pays avec les recherches precedente
						resCountry.innerHTML = "";
						//pour chaque pays de la reponse
						for (country of data) {
							console.log(country);
							//je créer un nouvel <article>
							const article = document.createElement("article");
							// je lui met un contenu
							article.innerHTML = `
								<h1>${country.name.common}</h1>    
								<p>Superficie : ${country.area} km²</p>
								<p>Dtatus : ${country.status}</p>
								<p>Drapeau : ${country.flag}</p>
								<p>population : ${country.population}</p>
							`;
							//des uqe la balise est prête, je l'ajoute
							resCountry.appendChild(article);
						}
					})
					//si erreur res pas ok
					.catch((err) => console.error(err));
			}
		})
		//si erreur de l'url fetché
		.catch((err) => console.error(err));
};

//fetch en version async await
allCountries.onclick = async (e) => {
	//je fetch l'url
	const result = await fetch(urlAllCountries);
	// je transforme le resultat en JSON
	const countryResult = await result.json();
	//pour chaque pays
	for (country of countryResult) {
		// console.log(country);
		// je créer un <article>
		const article = document.createElement("article");
		//je rempli le contenu du <article>
		article.innerHTML = `
        <h1>${country.name.common}</h1>    
        <p>Superficie : ${country.area}</p>
        <p>Drapeau : ${country.flag}</p>
        <p>population : ${country.population}</p>
        `;
		//j'ajoute le <article>
		resCountry.appendChild(article);
	}
};
