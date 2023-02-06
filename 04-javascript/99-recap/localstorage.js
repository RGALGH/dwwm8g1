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
const lstTheme = document.querySelector("#lstTheme");

//je recupere mon lien et je lui ajoute une action sur le click
//fonction call-back = fonction appeler apres coup
document.querySelector("#lstTheme").addEventListener("change", function () {
	// body.classList.remove(...body.classList);
    body.className="" // vider les classes css associés a mon body
	body.classList.add(lstTheme.value); // j'ajoute la classe selectionnée
	//je maj mon localStorage
	localStorage.setItem("theme", lstTheme.value);
});

//je vais gerer le fait de choisir le bon theme à l'arrivé sur la page
//est ce que 'ai un entré theme dans mn localStorage?
if (localStorage.getItem("theme") !== null) {
	body.classList.add(localStorage.getItem("theme"));
}
