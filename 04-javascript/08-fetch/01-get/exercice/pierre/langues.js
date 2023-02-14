const languesLst = document.querySelector("#languesLst");
const lstUrl = "./../script/lang.json";

const handleLangData = (responseText) => {
	if (responseText.ok) {
		responseText
			.json()
			.then(addLang)
			.catch((error) => console.log(error));
	} else {
		console.log(responseText.statusText);
	}
};

function addLang(responseText) {
	console.log(responseText);
	languesLst.innerHTML = "";
	for (lang in responseText) {
		console.log(lang);
        const objLang = Object.create(responseText[lang])
		console.log(objLang);
		const opt = document.createElement("option");
		opt.textContent = objLang.name;
		opt.onclick = () => {
			displayHeroes(objLang);
		};
		languesLst.appendChild(opt);
	}
}

const displayHeroes = (objLang) => {
	console.log(objLang);
	document.querySelector("main").innerHTML = `
    <section>
        <h1>${objLang.name}</h1>
        <h2>${objLang.title}</h2>
        <p>${objLang.description}</p>
    </section>
    `;
};

fetch(lstUrl).then(handleLangData);
