let todoList = [];

function addTodo() {
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;

    if (taskName && taskDescription) {
        const newTodo = { name: taskName, description: taskDescription, status: 'Not Completed' };
        todoList.push(newTodo);

        // Create a new todo card dynamically
        const todoListElement = document.getElementById('todoList');
        const card = createTodoCard(newTodo, todoList.length - 1);
        todoListElement.appendChild(card);

        clearInputFields();
    }
}

function createTodoCard(todo, index) {
    const card = document.createElement('div');
    card.classList.add('todo-card');

    const title = document.createElement('h1');
    title.textContent = todo.name;

    const description = document.createElement('p');
    description.textContent = todo.description;

    const status = document.createElement('div');
    status.classList.add('status-dropdown');
    status.textContent = todo.status;
    status.onclick = () => showStatusDropdown(index);

    const dropdown = document.createElement('select');
    dropdown.classList.add('hidden');
    dropdown.innerHTML = `
    <option value=" "></option>
        <option value="completed">Completed</option>
        <option value="notCompleted">Not Completed</option>
    `;
    dropdown.onchange = (event) => updateStatus(index,event.target.value);

    const actions = document.createElement('div');
    actions.classList.add('todo-actions');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editTodo(index);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTodo(index);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(status);
    card.appendChild(dropdown);
    card.appendChild(actions);

    return card;
}