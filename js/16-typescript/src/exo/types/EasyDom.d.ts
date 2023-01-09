declare type Options = {
    innerHTML?: string;
    textContent?: string;
    class?: string;
};
export default class EasyDom {
    tag(balise: string, options?: Options): HTMLElement;
    select(balise: string): HTMLElement | NodeList;
    event(balise: HTMLElement | HTMLElement[], evenement: string, fonction: any): void;
}
export {};
