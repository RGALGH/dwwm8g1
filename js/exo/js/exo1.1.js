const prenom = document.querySelector("#prenom"); // input prenom
const nom = document.querySelector("#nom"); // input nom
const btn = document.querySelector("#btn"); // button submit
const resultat = document.querySelector("#resultat"); // main id resultat

//ajouter un evement sur le click de mon boutton
btn.addEventListener("mouseover", () => {
	//Action qui va executer sur l'evenement
	// le .value permet de recuperer le contenu de mon input
	// resultat.textContent = `${prenom.value} ${nom.value.toUpperCase()}`;
    document.querySelector('#res').value = `${prenom.value} ${nom.value.toUpperCase()}`
});
