"use script";
export default class EasyDom {
    tag(balise, options = {}) {
        let tag = document.createElement(balise);
        let o;
        for (o in options) {
            if (o == "innerHTML" || o == "textContent") {
                tag[o] = options[o] ?? "";
                continue;
            }
            tag.setAttribute(o, options[o] ?? "");
        }
        return tag;
    }
    select(balise) {
        const elements = document.querySelectorAll(balise);
        if (elements.length === 1) {
            return elements[0];
        }
        return elements;
    }
    event(balise, evenement, fonction) {
        if (balise instanceof HTMLElement) {
            balise.addEventListener(evenement, fonction);
            return;
        }
        balise.forEach(b => {
            b.addEventListener(evenement, fonction);
        });
    }
}
