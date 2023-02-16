//verion séparé
// import h, {carre as c, coucou as salut} from './functions.js';

// const hello = h();
// console.log(hello);

// h();

// const carre5 = c(5);
// console.log(carre5);
// console.log(c(10));
// console.log(salut());

//version tout
import * as test from './functions.js';

console.log(test.default()); // dans le cas d'un import globale, la fonction exposrt defautl est automatiquement renommé default (helloworld dans cet exemple)

console.log(test.carre(7));
console.log(test.coucou());