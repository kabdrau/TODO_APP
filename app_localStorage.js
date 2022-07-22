const form = document.querySelector("#add-todo");
const input = document.querySelector("#add-task");
const todoList = document.querySelector("#todo-list");

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todoList")) || [];
for (let i = 0; i < savedTodos.length; i++) {
    // console.log(savedTodos[i].task)
    let newTodo = document.createElement('li');
    let newTodoPar = document.createElement('p');
    let completeButton = document.createElement('button');
    let removeButton = document.createElement('button');   
    completeButton.innerText = 'Completed';
    removeButton.innerText = 'Remove';
    newTodoPar.innerText = savedTodos[i].task;
    newTodoPar.isCompleted = savedTodos[i].isCompleted ? true : false;
    if (newTodoPar.isCompleted) {
        newTodoPar.classList.toggle('completed-todo');
    }
    newTodo.appendChild(newTodoPar);
    todoList.appendChild(newTodo);
    newTodo.appendChild(completeButton);
    newTodo.appendChild(removeButton);
}

// add complete and remove functionality
todoList.addEventListener('click', function(e) {
    const newTaskArray = [];
    const taskArray = JSON.parse(localStorage.getItem("todoList"));
    const text = e.target.parentElement.textContent.replace('CompletedRemove', '');
    
    if (e.target.tagName === 'BUTTON' & e.target.innerText === 'Remove') {
        for (const task of taskArray) {
            if (task.task !== text) {
                newTaskArray.push(task);
            }
        }
        e.target.parentElement.remove();

    } else if (e.target.tagName === 'BUTTON' & e.target.innerText === 'Completed') {
        e.target.parentElement.classList.toggle('completed-todo');

        for (const task of taskArray) {
            if (task.task === text) {
                task.isCompleted = !task.isCompleted;
                newTaskArray.push(task);
            }
        }
    }
    localStorage.setItem("todoList", JSON.stringify(newTaskArray)); 
});

// add new todo 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(input.value);
    let newTodo = document.createElement('li');
    let newTodoPar = document.createElement('p');
    let completeButton = document.createElement('button');
    let removeButton = document.createElement('button');
    completeButton.innerText = 'Completed';
    removeButton.innerText = 'Remove';
    newTodoPar.innerText = input.value;
    newTodo.appendChild(newTodoPar);
    todoList.appendChild(newTodo);
    newTodo.appendChild(completeButton);
    newTodo.appendChild(removeButton);
    input.value = '';

    // save to localStorage
    savedTodos.push({ task: newTodoPar.innerText, isCompleted: false });
    localStorage.setItem("todoList", JSON.stringify(savedTodos));
});