"use strict"

/* 
    La balise template est par défaut invisible dans votre navigateur.
    Peu importe ce que vous mettez dedans. 

    Son but est d'accueillir des éléments HTML qui vont servir à être récupéré par Javascript afin d'être 
    cloné et réutiliser à divers endroits.

    On commencera par selectionner le template qui nous intéresse, 
    Puis avec la propriété "content" on récupère le contenu du template sous forme de "documentFragment"

    Ensuite nous clonerons ce fragment via "HTMLElement.cloneNode(true)" dont le boolean permet de 
    ne pas cloner que l'élément mais aussi son contenu.

    Puis nous pourrons insérer ce clone dans notre HTML.
*/
// Je récupère le template
const blogTemplate = document.querySelector("#blog");
// je récupère son contenu
const blogArticle = blogTemplate.content

const blogTitle = blogArticle.querySelector("h2");
const blogText= blogArticle.querySelector("p");
const blogSource = blogArticle.querySelector("a");

async function getBlog()
{
    const response = await fetch("blog.json");
    if(!response.ok) return;
    const articles = await response.json();
    articles.forEach(a => {
        blogTitle.textContent = a.title;
        blogText.textContent = a.content;
        blogSource.textContent = a.source;
        blogSource.href = a.source;
        // Je clone mon contenu
        let clone = blogArticle.cloneNode(true);
        // je l'insert
        document.body.append(clone);
    });
}
getBlog()

/* 
    Si les templates sont utilisable comme ceci, les slots accompagnent uniquement le shadowDOM
    Donc voyons leur fonctionnement en fusionant la totalité de ce que l'on a vu jusqu'ici.

    En insérant des balises "slot" avec des attributs "names" dans mon template. 
    Puis en liant ce template au shadowDOM d'un customElement

    Lorsque je vais appeler mon customElement, si je place des balises HTML ayant un attribut "slot" 
    correspondant au "name" d'une des balises "slot", alors celle ci se verra remplacé.

    Ainsi il est possible d'insérer des éléments variables à vos templates.
*/
import SuperCard from "./SuperCard.js";