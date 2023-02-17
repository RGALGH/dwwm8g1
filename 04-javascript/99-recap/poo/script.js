import Telephone from "./telephone.js";

//*iphone version
let iphone = new Telephone("iphone", "noir", 200, "apple", 3.4, "m1");

iphone.demarer();
console.log(iphone.couleur);
console.log(iphone.getCouleur);

iphone.setCouleur = "orange";
// iphone.setCouleur("couleur");

console.log(iphone.getCouleur);

iphone.envoyerSMS(
	"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur magni nostrum corporis, quia atque quas dolore odit. Tenetur natus distinctio eligendi non quo. Animi, distinctio? Commodi adipisci magni hic sit!"
);

iphone.sonner();
iphone.tomber(150);


//*samsung version
let samsung = new Telephone("s23", "gris", 220, "samsung", 3.6, "snapdragon");

samsung.demarer();

console.log(samsung.getCpu);

samsung.setCpu = "rayzen";
console.log(samsung.getCpu);

samsung.pleurer();

samsung.setPoids ="cent";
console.log(samsung.getPoids)


