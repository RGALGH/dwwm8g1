const horloge = document.createElement('template');
horloge.innerHTML =`
<link rel="stylesheet" href="./nwmCollection/horloge/horloge.css">
<div class="content">
    <div class="clock">
        <div class="hour"></div>
        <div class="minute"></div>
        <div class="second"></div>
        <div class="pivot"></div>
    </div>
</div>
`;
export class horlogeCadran extends HTMLElement{
    constructor(){ 
        super();
        this.attachShadow({mode: 'open'}).appendChild(horloge.content.cloneNode(true));
    }
    connectedCallback() {
        this.start();
    }
    start() {
        let tH = this.shadowRoot.querySelector(".hour");
        let tM = this.shadowRoot.querySelector(".minute");
        let tS = this.shadowRoot.querySelector(".second");
        let time,h,m,s;

        setInterval(function(){
            time = new Date();
            h = time.getHours()*30-90;
            m = time.getMinutes()*6-90;
            s = time.getSeconds()*6-90;
            tS.style.transform = "rotate("+s+"deg)";
            tM.style.transform = "rotate("+m+"deg)";
            tH.style.transform = "rotate("+h+"deg)";
        },1000);
    }
}
customElements.define('horloge-cadran', horlogeCadran);