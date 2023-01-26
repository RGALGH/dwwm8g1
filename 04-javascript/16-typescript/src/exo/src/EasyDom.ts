"use script";
type Options = {innerHTML?:string, textContent?:string, class?:string}
export default class EasyDom{
    tag(balise: string, options:Options = {}){
        let tag = document.createElement(balise);
        let o: keyof Options;
        for(o in options){
            if(o == "innerHTML" || o == "textContent"){
                tag[o] = options[o]??"";
                continue;
            }
            tag.setAttribute(o,options[o]??"");
        }
        return tag;
    }
    select(balise: string): HTMLElement|NodeList{
        const elements = document.querySelectorAll<HTMLElement>(balise);
        if(elements.length === 1){
            return elements[0];
        }
        return elements;
    }
    event(balise: HTMLElement|HTMLElement[], evenement:string, fonction: any){
        if(balise instanceof HTMLElement){
            balise.addEventListener(evenement, fonction);
            return;
        }
        balise.forEach(b=>{
            b.addEventListener(evenement, fonction);
        })
    }
}