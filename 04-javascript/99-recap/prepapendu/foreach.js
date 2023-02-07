const lorem =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iste doloremque maiores quibusdam optio ipsam officiis, saepe, explicabo recusandae facilis ad rem! Quod nesciunt cum debitis! Labore eos corrupti voluptatibus!";

//je créer un tableau depuis la constante lorem via la methode split qui separe chaque morceau de phrase ou il y un espace
const arrayLorem = lorem.split(" ");

// console.log(arrayLorem);

//je vais parcourir mon tableau avec un foreach
arrayLorem.forEach(function (mot, index) {
	//fonction call-back
	//je créer mon paragraph
	const p = document.createElement("p");

	// p.textContent=`mot n° ${index} : ${mot}`
	p.textContent = "mot n° " + index + " : " + mot;
	p.addEventListener("click", () => alert(mot)); // j'ajoute un action sur le click du <p> (ici un alert)
	p.style.color = "red";

	//une fois que mon p est créer, je l'ajoute à mon HTML
	document.querySelector("#result").appendChild(p);
});

//split sur mot
const mot = "lorem";
arrMot = mot.split("");
console.log(arrMot);

//création de chaine depuis un tableau
const wordfromArray = arrMot.join("");

console.log(wordfromArray);

document.querySelector("#btnSearch").onclick = () => {
	// //recherche version tableau
	// if(arrMot.includes('E')){
	//     alert('E est present')
	// } else {
	//     alert('pas de E ici')
	// }

	//version chaine
	if (mot.indexOf("e") !== -1) { // je teste si différent car indexOf renvoi -1 si il ne trouve rien
		alert("E est present");
	} else {
		alert("pas de E ici");
	}

    //! les deux variantes sont sensibles à la casse
};
