const form = document.querySelector('#todoForm');
const todoList = document.querySelector('#todoList');
const todoInput = document.querySelector('#todoInput');
const btnDark = document.querySelector('#btnDark');
const btnRaz = document.querySelector('#btnRaz');

let todos = localStorage.getItem('todos') ? localStorage.getItem('todos').split(',') : ['Tâche exemple'];
console.log(todos)

const deleteTodo = (id) => {
    document.querySelector('#todo' + id).remove();
    todos.splice(id, 1)
    localStorage.setItem('todos', todos.join(','));
    displayTodos();
}

const updateTodo = (id) => {
    const oldTodoContent = document.querySelector('#descTodo' + id).textContent;
    document.querySelector('#descTodo' + id).innerHTML = `
        <input type="text" id="doUpdate${id}" placeholder="${oldTodoContent}" required>
        <button onclick="doUpdate(${id})">Mettre à jour</button>
    `
}

const doUpdate = (id) => {
    todos[id] = document.querySelector('#doUpdate' + id).value;
    localStorage.setItem('todos', todos.join(','));
    displayTodos();
}

const checkTodo = (id) => {
    document.querySelector('#descTodo' + id).classList.toggle('barrer');
}

const displayTodos = () => {
    todoList.innerHTML = `
        <article>
            <section>Tâches</section>
            <section>Actions</section>
        </article>
    `;

    todos.forEach((todo, index) => {
        const newTodo = document.createElement('article')
        newTodo.id = 'todo' + index;
        newTodo.innerHTML = `
                <section id="descTodo${index}">${todo}</section>
                <section>
                    <a href="#"><img src="./assets/img/edit.svg" alt="edit" class="icone" onclick="updateTodo(${index})"></a>
                    <a href="#"><img src="./assets/img/check-circle.svg" alt="check" class="icone" onclick="checkTodo(${index})"></a>
                    <a href="#"><img src="./assets/img/trash-2.svg" alt="remove" class="icone" onclick="deleteTodo(${index})"></a>
                </section>
            `;
        todoList.appendChild(newTodo)
    });
}

form.onsubmit = (e) => {
    e.preventDefault();
    todos.push(todoInput.value)
    localStorage.setItem('todos', todos.join(','));
    displayTodos();
}

btnRaz.onclick = () => {
    localStorage.clear()
    window.location.reload();
}

btnDark.onclick = () => document.querySelector('body').classList.toggle('dark-mode');

//affichage des taches
displayTodos();
