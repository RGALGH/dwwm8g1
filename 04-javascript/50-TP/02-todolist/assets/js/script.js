// recuperer les balises HTML
const form = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todoInput");
const btnRaz = document.querySelector("#btnRaz");
const btnDark = document.querySelector("#btnDark");

//je créer un tableau qui va stocker mes taches mais aussi dans la mémoire du navigateur
let todos = localStorage.getItem("todos")
	//je récupere la chaine des todos enregistrer en méméoire et je la convertit en tableau grace à la methode spli()
	? localStorage.getItem("todos").split(",")
	: ["Tâche exemple"];

// une fonction qui va afficher ma todolist
function displayTodos() {
	//je vide l'ancienne todolist
	todoList.innerHTML = `
	<article>
	    <section>Tâches</section>
	    <section>Actions</section>
	</article>
	`;
	// const displayTodos = () => {
	todos.forEach((todo, index) => {
		const article = document.createElement("article");
		article.innerHTML = `
            <section id="todo${index}"> ${todo} (n° ${index})</section>
            <section>
            <a href="#" onclick="displayUpdate(${index})"><img src="./assets/img/edit.svg" alt="edit"></a>
            <a href="#" onclick="strikeTodo(${index})"><img src="./assets/img/check-circle.svg" alt="check"></a>
            <a href="#" onclick="deleteTodo(${index})"><img src="./assets/img/trash-2.svg" alt="delete"></a>
            </section>
        `;
		todoList.appendChild(article);
	});
}

//fonction d'affichage de l'input de maj
const displayUpdate = (index) => {
	document.querySelector("#todo" + index).innerHTML = `
    <input type="text" id="updateInput${index}" placeholder="${todos[index]}">
    <button onclick="doUpdate(${index})">Modifier</button>
    `;
};

//fonction d'application de la mise à jour
const doUpdate = (index) => {
	//je met la case 'index' a jour
	todos[index] = document.querySelector("#updateInput" + index).value;
	//je met à jour le localstorage en lui passant mon tableau de todos trasnformé en texte grace à la methode 'join()'
	localStorage.setItem('todos', todos.join(','))
	displayTodos(); // je raffraichi l'affichage des tâches
};

//fonction de suppression
function deleteTodo(index) {
	todos.splice(index, 1); // je supprime la case correspondant à ma tache dans mon tableau
	//je met à jour le localstorage en lui passant mon tableau de todos trasnformé en texte grace à la methode 'join()'
	localStorage.setItem('todos', todos.join(','))
	displayTodos(); // je raffraichi l'affichage des tâches
}

//fonction pour rayer ma tâche
function strikeTodo(index) {
	document.querySelector("#todo" + index).classList.toggle("strike");
}

// sur le click du bouton raz, je reset l'affichage
btnRaz.onclick = () => {
	todos = ["Tâche exemple"]; // je reset le tableau de tache
	displayTodos(); // je reinit l'affichage
};

//la gestion du formulaire d'ajout
// form.addEventListener('submit', function(e){})
// btnAdd.addEventListener('click', function(e){})
form.onsubmit = (e) => {
	e.preventDefault(); // j'empeche le rechargement de page
	todos.push(todoInput.value); // j'ajoute la nouvelle à mon tableau
	//je met à jour le localstorage en lui passant mon tableau de todos trasnformé en texte grace à la methode 'join()'
	localStorage.setItem('todos', todos.join(','))
	displayTodos(); // je raffraichi l'affichage des tâches
};

//je génére le 1er affichage
displayTodos();

// je lie une action sur mon le click de mon bouton dark mode
btnDark.onclick = () =>
	document.querySelector("body").classList.toggle("dark-mode");
// btnDark.addEventListener('click', function () {
// 	document.querySelector('body').classList.toggle('dark-mode');
// });
