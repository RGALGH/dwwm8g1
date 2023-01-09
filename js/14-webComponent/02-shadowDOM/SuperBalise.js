export default class SuperBalise extends HTMLElement
{
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode:"open"});
        this.info = document.createElement("div");
        this.shadow.textContent = this.getAttribute("text")||"rien à dire";
        this.info.textContent = this.getAttribute("hide")||"rien à dire";
        this.shadow.append(this.info);
        this.initStyle();
        this.addEventListener("mouseenter", this.toggle);
        this.addEventListener("mouseleave", this.toggle);
    }
    initStyle()
    {
        const style = document.createElement("style");
        this.shadow.append(style);
        style.textContent = /* CSS */
        `
        :host{
            fontWeight: 900;
            color: red;
            position: relative;
        }
        div{
            position: absolute;
            bottom: -2rem;
            right: -1rem;
            border: 2px solid blue;
            border-radius: 5px;
            background-color: rgba(0,0,255,0.7);
            color: yellow;
        }
        `;
        this.info.style.display = "none";
    }   
    toggle()
    {
        if(this.info.style.display == "none")
            this.info.style.display = "";
        else
            this.info.style.display = "none";
    }
}
customElements.define("super-balise", SuperBalise);