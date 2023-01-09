"use strict";
//---------------------------- Les classes en POO-------------------------------------
import H from "./Human.js";
const humain = new H("maurice", "dupont", "78");
console.log(humain);
console.log(humain instanceof H);
// -------------- Static -------------------
// fonctionne
H.description();
console.log(H.categorie);
// ne fonctionne pas
// console.log(humain.categorie);
// humain.description();
// --------------- Private -----------------
// console.log(humain.#name);
// Je peux accèder à fullname mais pas à #name
console.log(humain.fullname);
// Si on ne met pas une méthode ou une propriété en privée, elle est public et accessible partout.
console.log(humain.createdAt);
humain.salutation();
humain.anniversaire();
// ------------------------------- L'héritage ---------------------------------------
import D from "./Dev.js";
let dev = new D("bruno", "dubois", 19, "Javascript");
console.log(dev);
console.log(dev instanceof H, dev instanceof D);
dev.salutation();
dev.anniversaire();
