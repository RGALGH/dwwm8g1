"use strict";
/* 
    Ecmascript permet l'export et import de fonctions et objets entre autre choses.
    Cela va permettre entre autre choses de pouvoir diviser notre code sans avoir à devoir ajouter
    tous les fichiers dans le bon ordre dans notre head.
    De plus on peut choisir d'importer certains scripts qu'à certaine conditions.

    Pour cela, la première chose à faire est d'ajouter l'attribut suivant à notre balise script :
        * type="module"
    ?------------------------- EXPORT --------------------
    Pour importer du code, il faut avant tout l'exporter, pour cela rendons nous dans le fichier 
    contenant ce que l'on souhaite exporter. 

    On va ajouter l'un de ces deux mots clefs devant ce que l'on souhaite exporter :
        * export
        * export default
    On peut exporter autant d'élément que l'on souhaite, mais seul l'un d'entre eux
    peut profiter de "export default"
    ?------------------------ IMPORT ------------------------
    Par défaut, l'import ne peut se trouver que dans le block le plus haut.
    C'est à dire pas dans une fonction, une condition, une boucle ou autre.
    
    Sans default dans le fichier, il suffit d'utiliser le mot clef import, 
    suivi d'entre accolade, séparé de virgule les fonctions que l'on veut importer.
        puis le mot clef from et en string le chemin vers le fichier.
            * import {salut, coucou} from "./salutation.js";
    Si un mot clef default a été utilisé, avant les accolades on peut donner un nom
    peu importe lequel et il sera utilisé pour importer la fonction par défaut.
            * import b, {salut, coucou} from "./salutation.js";
    On peut aussi renommer les fonctions exporté avec le mot clef "as"
            * import b, {salut as s} from "./salutation.js";
    On peut aussi tout simplement tout importer dans un objet.
            * import * as salutations from "./salutation.js";

    On notera que lors de l'import, le script du fichier importé est executé, 
    ici notre console.log est visible.
*/
import b, {salut, coucou as c} from "./salutation.js";

b();
salut();
/* 
    Un élément importé peut très bien faire appel à des éléments qui ne sont pas importé. 
*/
c("Maurice");
/*
    Pour faire un import sans être au top level du script (dans une condition, une boucle
    un évènement ou autre). 
    On n'utilisera pas le mot clef import mais la fonction suivante :
    * import() 
    Elle retournera une promesse et cette promesse retournera un objet contenant
    tout ce qui a été exporté dans ce fichier.
 */
window.addEventListener("keyup", e=>{if(e.key=="Enter")hello()});
async function hello(){
    /*
        On notera qu'ici notre console log n'est pas joué, 
        non pas qu'avec cette technique le script n'est pas joué, au contraire, l'import ne change pas.
        Mais si on tente d'importer plusieurs fois le même fichier, le script ne se lancera qu'une fois.
        Si je commente mon précédent import, le console log apparaîtra ici.
    */
    const salutations = await import("./salutation.js")
    console.log(salutations);
    /*
        Avec cette technique, l'élément importé par défaut perd son nom 
        et se retrouve rangé dans la propriété "default"
    */
    salutations.default();
    salutations.salut();
    salutations.coucou("Charlotte");
}