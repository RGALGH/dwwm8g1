import Compte from "./Compte.js";

const ccp = new Compte(150, 2);

//solde
console.log(ccp.affiche());

//dépot
console.log(ccp.depot(150));

//retrait
console.log(ccp.retrait(50));

//interet
console.log(ccp.interet());
