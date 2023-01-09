const jauge = document.createElement('template');
jauge.innerHTML = `
    <link rel="stylesheet" href="./nwmCollection/jauge/jauge.css">
    <div id="jauge">
        <div id="cont" data-pct="50">
            <svg id="svg" width="200" height="200" viewPort="0 0 100 100" xmlns="https://www.w3.org/2000/svg">
                <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0">
                </circle>
                <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48"
                    stroke-dashoffset="0"></circle>
            </svg>
        </div>
        <div id="pctInput">
            <label for="percent">Entrez un pourcentage</label>
            <input id="percent" name="percent">
        </div>
    </div>
`;
export class jaugeCircle extends HTMLElement
{
    constructor(){ 
        super();
        this.attachShadow({mode: 'open'}).appendChild(jauge.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector('#percent').addEventListener('input', this.progress.bind(this));
        this.progress();
    }
    progress(e){

        let val = parseInt(e?.target.value??0);
        let circle = this.shadowRoot.querySelector('#svg #bar');
        let r = circle.getAttribute("r");
        let c = Math.PI * (r * 2);
        if (isNaN(val)) {
            val = 0;
        } else{
            if (val < 0) {
                val = 0;
            }
            if (val > 100) {
                val = 100;
            }
        }
    
        let pct = ((100 - val) / 100) * c;
        circle.style.strokeDashoffset = pct;
    
        this.shadowRoot.querySelector('#cont').dataset.pct = val;
    }
}
customElements.define('jauge-circle', jaugeCircle);


