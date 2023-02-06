/*const tableau = [1,5,4,7,8,9,6,6 ]

let storageLocal = {
    login: "pierre", 
    monChat: 'Tom'
}

/*
case 0 => 1
case 1 => 5
...
* /

const objet = {
    nom: "toto", 
    prenom: "jean-michel",
    7: "7"
}

//création de "raccourci"
// monStockage = window.localStorage;

//setItem permet de créer une nouvelle entrée dans le local ou modifie l'entré si elle existe deja
localStorage.setItem('monChat', 'Tom');
localStorage.setItem('monChat', 'Joe');

//getItem => permet de récuperer une valeur spécifique du localStorage
const nomDuChat = localStorage.getItem('monChat') // storageLocal['monChat'] => recupere 'joe'

//removeItem => permet de supprimer une entrée du localStorage si elle existe 
localStorage.removeItem('monChat'); // supprime l'entrée "monChat"

// Effacer tous les éléments du localStorage 
localStorage.clear();
*/
const body = document.querySelector("body");

//je recupere mon lien et je lui ajoute une action sur le click
//fonction call-back = fonction appeler apres coup
document.querySelector("#linkDM").addEventListener("click", function () {
	// je recupere le body et je lui toggle la classe dark-mode
	body.classList.toggle("dark-mode");
	//je maj mon localStorage
	if (body.classList.contains("dark-mode")) {
		//si le body contient la classe 'dark-mode', on enregistre la class dark-mode dans le localstorage
		localStorage.setItem("theme", "dark-mode");
	} else {
        //je supprime l'entrée thème de mon localstorage
        localStorage.removeItem('theme');
    }
});

//je vais gerer le fait de choisir le bon theme à l'arrivé sur la page
//est ce que 'ai un entré theme dans mn localStorage?
if(localStorage.getItem('theme') !== null){
    body.classList.add('dark-mode')
}
