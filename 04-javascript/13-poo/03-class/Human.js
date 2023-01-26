"use strict";
/*
    Une classe est un plan qui servira à la construction d'un objet.
    
    Certaines sont déjà intégré par défaut à JS:
        "Date", "FormData" et plein d'autres.
    Bien sûr on peut créer les notres.
        Pour cela on utilisera le mot clef "class" suivi de son nom puis d'accolade qui contiendront tous le contenu de notre classe.
        * class MaSuperClasse{}

    Les conventions de développeur concernant les classes sont :

        - Une classe par fichier, (on pourrait en avoir - plusieurs ou même les intégrer à notre code principal)
        - Le nom de la classe qui commence par une majuscule.
        - Le nom du fichier qui porte le même nom que la classe. 
        
    (rien ne vous oblige à les suivre mais dans vos projets mais la plupart des développeurs le font et dans certains frameworks cela peut avoir son importance.) 
    
    Lorsque l'on voudra créer un nouvel objet, on appellera le nom de la classe précédé du mot clef "new".

    * const monSuperObjet = new MaSuperClasse();
 */
// évidement on peut exporter une classe.
export default class Human{
    /*
        Une propriété ou méthode static est appelable uniquement sur la classe et non sur l'objet.

        Exemple avec date :
        
            console.log(Date.now());
            * la méthode static "now" fonctionne avec la classe "Date".

            let d= new Date();
            console.log(d.now());
            * la méthode static "now" ne fonctionne pas avec une instance de l'objet "Date".

            Sur ma classe Human je peux appeler categorie et description.
            Mais sur un objet Human je ne peux pas.
     */
    static categorie = "Mamifère"
    /*
        Les propriétés d'un objet n'ont pas besoin de "let", "var" ou "const".

        Une propriété ou une méthode commençant par un "#" est dite "privée" (private)
        Elle ne peut être appelé qu'à l'interieur de notre classe.

        Si je tente de l'appeler hors de ma classe, cela me retournera une erreur.

        Les méthodes et propriétés privées servent au fonctionnement interne de la classe. Le développeur n'y a pas accès.

        Prenons l'exemple d'un distributeur de boisson:
            L'utilisateur peut accèder aux boutons pour choisir sa boisson, au système de paiement.
            Mais il n'a pas accès au système qui distribue la boisson ou à la gestion du stock.
     */
    #name = {};
    #age;
    vivant = true;
    /*
        Dans nos classes on peut déclarer une méthode commune à toute les classes qui se nomme "constructor".

        Cette méthode ne peut pas être appelé par le développeur.

        Elle est automatiquement appelé lors de l'instanciation d'une classe. (utilisation du mot clef "new")

        Les arguments que je lui donne sont automatiquement récupéré lors de l'instanciation.

            constructor(truc){
                console.log(truc)
            }
            new MaSuperClass(5) 
            Cela va affiche "5" dans ma console.
    */
    /**
     * Créer un nouvel humain.
     * @param {string} prenom Prenom de l'humain
     * @param {string} nom Nom de l'humain
     * @param {number|string} age Age de l'humain
     */
    constructor(prenom, nom, age){
        this.setPrenom = prenom;
        this.#setNom = nom;
        this.#setAge = age;
        /*
            Les propriétés privées doivent être déclarées en avance.
            Mais les propriétés public peuvent être déclarées à la volée.
         */
        this.createdAt = new Date();
        /* 
            categorie et description sont undefined dans mon objet car étant static, elles n'existent que dans la classe et non dans l'objet.
        */
        // console.log(this.categorie);
        // this.description();
    }
    /* 
        En JS:
        Les fonctions dans une classe ne prennent pas le mot clef function.
        par contre on pourra trouver les mots clef static, set ou get.
     */
    static description(){
        console.log(`Un humain est un ${this.categorie} a générélament une tête, un buste, deux bras et deux jambes.`);
    }
    /*
        Les getters et les setters se déclarent comme des méthodes,
        Mais s'utilisent comme des attributs.
        les setters sont déclarés précédés du mot clef set,
        les getters sont déclarés précédés du mot clef get.
        
        * Déclaration :
            set setBidule(text){
                this.#bidule = text.toUpperCase();
            }
            get getBidule(){
                return this.#bidule = "voici ton bidule : "+this.#bidule;
            }
        * Utilisation :
            monSuperObjet.setBidule = "machin";
            console.log(monSuperObjet.getBidule)

        ! Evitez de faire des setters et getters inutilent.
        Si vous n'avez pas besoin de modifier votre élément avant de le sauvegarder dans votre objet ou avant de le récupérer.
        Autant appeler directement la propriété sans créer de setter et getter.
     */
    set setPrenom(p){
        this.#name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
    }
    set #setNom(n){
        console.log(n);
        this.#name.nom = n.toUpperCase();
    }
    set #setAge(a){
        this.#age = parseInt(a);
    }
    get getFullname(){
        return this.#name.prenom+" "+this.#name.nom;
    }
    get getAge(){
        return this.#age+" ans";
    }
    salutation(){
        console.log(`Bonjour, je suis ${this.getFullname} et j'ai ${this.getAge}`);
    }
    anniversaire(){
        this.#age++;
        this.salutation();
    }
}