import Compte from "./Compte.js";

const main = document.querySelector("main");
const frmDepot = document.querySelector("#frmDepot");
const montantDepot = document.querySelector("#montantDepot");
const frmRetrait = document.querySelector("#frmRetrait");
const montantRetrait = document.querySelector("#montantRetrait");
const btnInteret = document.querySelector("#btnInteret");
const btnSolde = document.querySelector("#btnSolde");

//crétion d'une instance de la classe Compte
const ccp = new Compte(150, 2);

//dépot
frmDepot.addEventListener("submit", (e) => {
	e.preventDefault();
	const somme = parseFloat(montantDepot.value);
	const result = ccp.depot(somme);
	main.textContent = result;
	console.log(result);
    montantDepot.value="";
    montantDepot.focus();
});

//retrait
frmRetrait.addEventListener("submit", (e) => {
	e.preventDefault();
	const somme = parseFloat(montantRetrait.value);
	const result = ccp.retrait(somme);
	main.textContent = result;
	console.log(result);
    montantRetrait.value="";
    montantRetrait.focus();
});

//interet
btnInteret.addEventListener("click", () => {
	const result = ccp.interet();
	main.textContent = result;
	console.log(result);
});

// solde
btnSolde.addEventListener("click", () => {
	const result = ccp.affiche();
	main.textContent = result;
	console.log(result);
});
