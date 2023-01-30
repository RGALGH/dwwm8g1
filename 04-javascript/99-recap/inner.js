//je recuperer mon bouton
const btn = document.querySelector("#btn");

//je vais ajouter une action sur le clic du bouton
btn.addEventListener("click", function () {
	//je vais cibler mon paragraph et remplacer le texte actuel par un span, un h1 et une img
    //innerHTML permet de changer le code html contenu dans la balise
	document.querySelector("p").innerHTML =
		`
        <span>hello world</span>
        <h1>titre</h1>
        <img src="https://via.placeholder.com/150/FF0000/808080" alt="placeholder" />
        `;
});
