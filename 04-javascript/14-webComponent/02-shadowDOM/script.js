"use strict"

/* 
    Le shadow DOM permet de créer un arbre DOM séparé du reste du DOM.
    Ce DOM fantôme obéit à ses propres règles, ignorant les scripts et styles du DOM parent.
    De même les scripts et styles du DOM fantôme n'influe pas sur ceux du parent.

    Pour créer un hôte fantôme (shadow host) il suffit d'appeler la méthode suivante "attachShadow" :
        element.attachShadow({mode:""})
            le mode peut être "open" ou "closed"
    Le mode "open" est accessible depuis n'importe quel script via l'attribut "shadowRoot" de son hôte.
    alors que le close n'est censé ne pas être accessible.

    Mais JS et la sécurité faisant deux, il est possible de passer à travers cela.
    Par ce fait, la plupart du temps les développeurs le laisse ouvert.
*/
const open = document.querySelector(".open")
const close = document.querySelector(".close")

const shadowpen = open.attachShadow({mode:"open"});
const shadowclose = close.attachShadow({mode:"closed"});

// accessible
console.log(open.shadowRoot);
// Non accessible
console.log(close.shadowRoot);
/*
    Dans l'exemple suivant chacun des 3 h1 ne sont affecté par que par le style de leur propre DOM.

    à noter que j'utilise des feuilles de style interne dans cet exemple, mais il est tout à fait possible 
    d'utiliser des feuilles de style externe.

    On notera aussi le selecteur css ":host" qui est utilisable uniquement dans un shadowDOM et qui correspondra au "root" ou au "body"
    de notre DOM fantôme.
*/
const style1 = document.createElement("style");
style1.textContent = /* CSS */
`
:host{
    text-align: right;
}
h1{
    background-color: black;
}
`
const h01 = document.createElement("h1")
h01.textContent = "Je vois des fantômes dans les ombres";
shadowpen.append(style1, h01)

const style2 = document.createElement("style");
style2.textContent = /* CSS */
`
:host{
    text-align: center;
}
h1{
    text-shadow: 5px 5px 5px red;
}
`
const h02 = document.createElement("h1")
h02.textContent = "Mon ombre cache un fantôme";
shadowclose.append(style2, h02)
/*
    Si je tente de selectionner tous mes h1, seul celui du dom principale sera trouvé.

    Pour selectionner un élément dans mon shadow DOM il me faudra directement faire ma recherche 
    dans celui ci, via la shadowRoot retourné par attachShadow soit via son shadowHost 
*/
const hx = document.querySelectorAll("h1");
console.log(hx);

const h01bis = shadowpen.querySelector("h1")
const h01bis2 = open.shadowRoot.querySelector("h1")
console.log(h01bis, h01bis2);

/*
    Maintenant fusionnons notre shadow DOM avec nos custom elements.
    Je lie mon custom elements à mon shadowDOM directement dans son constructor.

    Et je peux ajouter mon style directement sous forme de fichier ou de balise style sans que cela n'entre en conflit avec le reste.
*/
import SuperBalise from "./SuperBalise.js";