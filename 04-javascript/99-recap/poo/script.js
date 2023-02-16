import Telephone from './telephone.js';

let iphone = new Telephone('iphone',"noir",200, "apple", 3.4, "m1");

iphone.demarer();
console.log(iphone.couleur);

iphone.couleur ="blanc";

console.log(iphone.couleur);

iphone.envoyerSMS('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur magni nostrum corporis, quia atque quas dolore odit. Tenetur natus distinctio eligendi non quo. Animi, distinctio? Commodi adipisci magni hic sit!')

iphone.sonner()

iphone.tomber(150);

let samsung = new Telephone('s23',"gris",220, "samsung", 3.6, "snapdragon");

samsung.demarer();

console.log(samsung.cpu);
samsung.cpu ="rayzen";
console.log(samsung.cpu);

samsung.pleurer();

samsung.setPoids("cent");



