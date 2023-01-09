"use strict";
// Le type unknow est utilisé pour indiquer que l'on ne connaît pas le type de notre argument.
// à la différence de any, toute action spécifique à un type sera bloqué.
function hasard(arg: unknown){
    // toString() ne peut être utilisé sur tout et n'importe quoi alors erreur.
    // arg.toString();
    if(typeof arg === "number"){
        // Ici on sait que arg est un nombre alors on peut lui faire toString()
        arg.toString();
    }
}
// Si on regarde le type de a, ce ne sera pas string mais le literal "bonjour"
const a = "bonjour";
// a1 sera bien un string
let a1 = "bonjour";
// a étant une constante, il ne pourra être modifié, il prend donc en type sa valeur.
// les types de truc et machin sont des string, car si l'objet sera toujours le même, son contenant
// lui peut changer.
const b = {truc: "banane", machin: "camion"};
// avec le mot clef as, je peux renomer le type de truc, ou encore dire que machin aura pour type 
// sa propre valeur.
const b1 = {truc: "banane" as "fruit", machin: "camion" as const};
// Je peux utiliser aussi as const hors de l'objet pour indiquer que tout son contenu sera en readonly
const b2 = {truc: "banane", machin: "camion"} as const;
// Mon tableau est en readonly
const c = [1,2,3] as const;
// un tableau de string et number
const c1: (string|number)[] = [1,'truc', 3,6];
// Ceci est un tuple, il indique que notre tableau contiendra un string puis un nombre et c'est tout.
const c2: [string, number] = ["truc", 5];
// const c3: [string, number] = ["truc", 5,"bidule"];

type ListeBool = [string, boolean];

const c3: ListeBool= ["chaussette", true];
const c4: ListeBool= ["tongue", true];

// Je précise que T1 et T2 sont des tableaux inconnu pour pouvoir manipuler les tableaux.
function fusion<T1 extends unknown[], T2 extends unknown[]>(tab1:T1, tab2:T2): [...T1, ...T2]{
    return [...tab1, ...tab2]
}
// le type de c5 est un tuple string, boolean, string boolean.
const c5 = fusion(c3,c4);
// équivalent sans la fonction.
type DoubleLB = [...ListeBool, ...ListeBool];
const c6: DoubleLB = [...c3,...c4];

// les énumérateurs permettent de lister des valeurs qui seront les seuls utilisable
enum Fruits {
    Banane,
    Fraise, 
    Pomme,
    Cerise
}
interface favorite{
    fruit: Fruits;
    legume: string;
}
//Les seuls valeurs accepté pour fruit sont ceux défini dans enum.
const maurice: favorite = {
    legume: "carotte",
    fruit: Fruits.Banane
}
/**
 * Par défaut lors de la compilation, les valeurs énuméré seront remplacé par des chiffres
 * Mais il est possible de donner une valeur string à chacun de nos enumerateurs 
 * par exemple en disant Banane = "banane"
 * On peut aussi faire des enum qui seront invisible lors de la compilation en ajoutant le mot clef
 * const devant l'enum.
 */