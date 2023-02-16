"use strict";
//---------------------------- Les classes en POO-------------------------------------
import H from "./Human.js";
const maurice = new H("maurice", "dupont", "78");
console.log(maurice);
console.log(maurice instanceof H);
// -------------- Static -------------------
// fonctionne
H.description();
console.log(H.categorie);
// ne fonctionne pas
// console.log(maurice.categorie);
// maurice.description();
// --------------- Private -----------------
// console.log(maurice.#name);
// Je peux accèder à fullname mais pas à #name
console.log(maurice.fullname);
// Si on ne met pas une méthode ou une propriété en privée, elle est public et accessible partout.
console.log(maurice.createdAt);
maurice.salutation();
maurice.anniversaire();
// ------------------------------- L'héritage ---------------------------------------
import D from "./Dev.js";
let dev = new D("bruno", "dubois", 19, "Javascript");
console.log(dev);
console.log(dev instanceof H, dev instanceof D);
dev.salutation();
dev.anniversaire();
