const btnStart = document.querySelector("#start");
const stop = document.querySelector("#stop");
const progress = document.querySelector(".progress");
let percent = 0;

//je créer une action sur le click de mon bouton
btnStart.addEventListener("click", function () {
	//lance un interval de répétition de l'agrandissement de la progressbar
	const timer = setInterval(function () {
		// si je suis à 100% de large, je reviens à 0 pour eviter de sortir du conteneur
		if (percent >= 100) {
			percent = 0;
		}
		//Action qui sera repeter
		progress.style.width = +percent + "vw"; // modifier la largeur de la barre progress
		percent++; // j'ajouter 1 % pour le prochain passage
	}, 1000); // toutes les 1000 milisecondes

	//sur le click du bouton stop, je stoppe la repetion de mon interval
	stop.addEventListener("click", function () {
		clearInterval(timer); // arret de l'intervall nommé timer
	});
});


document.querySelector('#heure').addEventListener('click', function(){
    const date = new Date();
    document.querySelector('#temps').textContent = date.toLocaleTimeString()
})
