// je déclare toutes mes variables
const price = document.querySelector("#priceIpt"); // recupere la balise input "#price"
const submitBtn = document.querySelector("#submitBtn"); //je recupere le bouton "#submitBtn"
const restartBtn = document.querySelector("#restartBtn"); //je recupere le bouton "#submitBtn"
const tryDone = document.querySelector("#tryDone"); //je recupere le p #tryDone
const result = document.querySelector("#result"); //je recupere le p #result

// je crée un tableau pour stocker tout les cadeaux disponibles
const giftArray = [
	"une trotinnette",
	"un chameau",
	"une poire à lavement",
	"un pc portable",
	"une voiture thermique avec un bidon d'essence vide",
	"un survetement adadas",
	"un aller simple en corée du nord",
];

/*
Math.random() => genere un chiffre a virgule compris entre 0 et 1 exemple 0,43235345346546565
ensuite on multiplie le chiffre par la valeur max attendu (100 dans notre exemple, car le prix max possible est 100)
mais on obtient toujours un resultat en nombre flotant (a virgule), ex : 23,4578999908908
enfin il faut arrondir ce chiffre pour le convertir entier (Math.floor())
*/
let priceToFind = Math.floor(Math.random() * 100);
/*
pour choisir mon n° de cadeau, je genere un entier compris entre 0 
et la taille de mon tableau (tabeau.lenght), cependant je n'oublie pas de faire longueur tableau 
-1 pour prendre en compte le fait que la 1er case d'un tableau (en js, php..)est la case n°0
*/
let selectedGift = Math.ceil(Math.random() * (giftArray.length - 1)); // prix aléatoire entre 1 et 100
//je créer mon compteur d'essais, en l'initialisant à 0
let tryNumber = 0;

console.log(priceToFind); // j'affiche le prix à trouver en console

// permet de recommencer une partie
function restart() {
	// je réinitialise les variables qui vont bien
	priceToFind = Math.floor(Math.random() * 100); // prix aléatoire entre 1 et 100
	selectedGift = Math.ceil(Math.random() * (giftArray.length - 1)); // cadeau aléatoire entre 1 et longeur tableau -1
	tryNumber = 0; //initialisation

	// je remet mon affichage à 0
	result.textContent = "";
	tryDone.textContent = "0 essai";

	console.log(priceToFind); // j'affiche le prix à trouver en console
}

// fonction de mise à jour de l'affichage du nombre d'essai
const displayNumTryLeft = () => {
	//si plus d'un essai alors version pluriel, sinon version singulier
	const trySentence =
		tryNumber > 1 ? `${tryNumber} essais` : `${tryNumber} essai`;
	//je renvoi la phrase choisi au reste du programme
	return trySentence;
};
