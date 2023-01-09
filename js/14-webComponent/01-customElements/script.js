import SuperBalise from "./SuperBalise.js";
import SuperDiv from "./SuperDiv.js";

/* 
    Les customs elements (éléments personalisés) permettent de créer nos propres éléments HTML.
    On va pouvoir créer de nouvelles balises ayants leurs propres capacités et règles.
    Pour cela on a besoin de créer une nouvelle classe.

    Il existe deux types de customs elements:
        - les éléments personalisés autonomes qui qui hérite de "HTMLElement"
        - Les éléments personalisées intégrés qui hérite d'un élément HTML particulier (div, span, ul...)
    Puis d'appeler (hors de la classe) la méthode suivante :

        customElements.define()
    
    Elle prendra en premier argument. un string qui sera le nom de votre balise
        ! IMPORTANT les noms des balises personalisées doivent contenir un "-" 
    et en second argument elle prendra la classe de la balise personalisée.
        * voir SuperBalise.js
    Elle peut optionnellement prendre en troisième argument un objet contenant la propriété "extends".
        Cela sera utilisé si votre balise n'hérite pas de "HTMLElement"
        mais d'une balise plus précise, par exemple "HTMLParagraphElement", il faudra alors indiqué dans cet objet qu'elle étant de "p"
        * voir SuperDiv.js
    
    Nos éléments html personalisés peuvent avoir leurs propres méthodes et propriétés.

    Pour les appelers dans notre HTML, à partir du moment où la méthode précédente a été appelé,
    il suffit de suivre une des syntaxes suivantes :
        - autonome : "<nom-balise></nom-balise>"
        - intégré : "<baliseParente is="nom-balise"></baliseParente>"

    Il est aussi possible d'ajouter des cycles de vie à notre élément HTML.
    Les cycles de vie sont des méthodes qui vont se déclencher à des moments bien précis.

        "connectedCallback" se déclenche quand l'élément est ajouté à la page.
        "disconnectedCallback" se délenche quand l'élément est retiré de la page.
        "adoptedCallback" se déclenche quand l'élément est déplacé d'un document à un autre.
            (principalement utile avec iframe par exemple)
        "attributeChangedCallback" les attributs ciblés ont été modifié.
            On pourra donner à ce derniers trois arguments,
                le premier recevra le nom de l'attribut modifié,
                le second l'attribut avant modification,
                le troisième, l'attribut après modification.
            Pour que cela fonctionne on devra accompagner cela d'un getter static appelé 
                "observedAttributes" qui retourne un tableau contenant les attributs à observer.
    */