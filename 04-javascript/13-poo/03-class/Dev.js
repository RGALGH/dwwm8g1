"use strict";
import H from "./Human.js";
/*
    Avec le mot clef extends on permet l'héritage d'une classe.
    Ici notre nouvelle classe Dev hérite de notre class Human.
    
    L'héritage permet de donner toute les propriétés et méthode du parent à son enfant.
    Toute, pas exactement il n'est pas possible d'utiliser les propriétés et méthode privées.
*/
export default class Dev extends H{
    /**
     * Créer un nouvel humain.
     * @param {string} prenom 
     * @param {string} nom 
     * @param {number|string} age 
     * @param {string|Array} tech 
     */
    constructor(prenom, nom, age, tech){
        /*
            l'héritage JS entraine un problème, si la classe qui a hérité possède un "constructor", cela va entrainer une erreur.

            Pour corriger cette erreur, il faut appeler dans le constructeur de notre nouvelle classe la fonction "super()"

            Cette fonction va permettre d'appeler le "constructor" de son parent.

            Par la même occasion on va pouvoir en profiter pour fournir à notre fonction "super" tous les arguments qui sont attendu par le "constructor" de son parent.
         */
        super(prenom, nom, age);
        this.techniques = tech;
    }
    set techniques(t){
        if(Array.isArray(t)){
            this.tech = t;
        }else{
            this.tech = [t];
        }
    }
    /*
        Il est possible de réécrire la méthode d'un parent en la redéfinissant.
        Ici this.salutation() de Humain n'existe plus et est remplacé par celle ci.
        La méthode anniversaire qui faisait appelle à salutation dans la classe Humain
        fera bien appelle à celle nouvellement créé dans Dev.
     */
    salutation(){
        console.log(`Bonjour, je suis ${this.getFullname} et j'ai ${this.getAge} et je maîtrise ${this.tech.join(", ")}`);
    }
}