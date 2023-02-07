//evenement au survol
document.querySelector("#test").addEventListener("mouseenter", function () {
	alert("survol en cours");
});

//bouton de création d'image
document.querySelector("#imgBtn").onclick = () => {
	//je créerr une balise img
	const img = document.createElement("img");
	//je lui defini une source et un alt
	img.src = "./arriere-plan-virtuel-loft.76571.jpg";
	img.alt = "image de loft";
	//    img.classList.add('imgTest') // adapté pour appliquer plusieurs propriétés d'un coup
	img.style.width = "35vw"; // adapté pour une retouche mineur (1 seule propriété)
	//une fois que mon img est prete, je l'ajoute avec coté HTML
	document.querySelector("#pImg").appendChild(img);
};

//je créer un objet audio avec le son motus boule noir en source
const son = new Audio("./motus-boule-noire.mp3");

//création d'un element son
document.querySelector("#playSoundBtn").onclick = () => {
	//je lance la lecture
	son.play();
};

document.querySelector("#PauseSoundBtn").onclick = () => {
	//je met la lecture en pause
	son.pause();
};

document.querySelector("#StopSoundBtn").onclick = () => {
	//j'arrête la lecture
	son.pause(); // je met en pause
	//je reviens au debut du son
	son.currentTime = 0;
};

document.querySelector("#playVideoBtn").addEventListener("click", () => {
	document.querySelector('#demoVideo').ful();
});
