export default class SuperDiv extends HTMLDivElement
{
    constructor()
    {
        console.log("test");
        super();
        this.#setStyle();
        this.addEventListener("click", this.hide)
    }
    #setStyle()
    {
        this.style.display = "block";
        this.style.overflow = "hidden"
        // Je récupère l'attribut "bg" si il existe
        this.style.backgroundColor = this.getAttribute("bg")??"red";
        this.style.transition = "height 0.3s linear"
        this.sizes = this.getBoundingClientRect();
        this.style.height = this.sizes.height+"px";
    }
    hide()
    {
        if(this.style.height == "1rem")
            this.style.height = this.sizes.height+"px";
        else
            this.style.height = "1rem";
    }
    // Montrer la à partir des cycles de vie :
    connectedCallback()
    {
        // On pourrait imaginer y ajouter des eventListener
        console.log("message affiché quand l'élément est ajouté à la page.");
    }
    disconnectedCallback()
    {
        // On pourrait imaginer y retirer les eventListener
        console.log("message affiché quand l'élément est retiré de la page.");
    }
    adoptedCallback()
    {
        console.log("L'élément a été déplacé vers un nouveau document");
    }
    attributeChangedCallback(name, old, now)
    {
        console.log(
            `L'attribut "${name}" est passé de :
            "${old}"
            à
            "${now}"`
        );
    }
    static get observedAttributes() 
    {
        return ['style'];
    }
}
customElements.define("super-div", SuperDiv, {extends:"div"})