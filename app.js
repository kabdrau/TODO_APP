const form = document.querySelector("#add-todo");
const input = document.querySelector("#add-task");
const todoList = document.querySelector("#todo-list");

// add complete and remove functionality
todoList.addEventListener('click', function(e) {
    // console.log(e.target)
    if (e.target.tagName === 'BUTTON' & e.target.innerText === 'Remove') {
        e.target.parentElement.remove();
    } else if (e.target.tagName === 'BUTTON' & e.target.innerText === 'Completed') {
        e.target.parentElement.classList.toggle('completed-todo');
    } 
});

// add new todo 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(input.value);
    const newTodo = document.createElement('li');
    const newTodoPar = document.createElement('p');
    const completeButton = document.createElement('button');
    const removeButton = document.createElement('button');
    completeButton.innerText = 'Completed';
    removeButton.innerText = 'Remove';
    newTodoPar.innerText = input.value;
    newTodo.appendChild(newTodoPar);
    todoList.appendChild(newTodo);
    newTodo.appendChild(completeButton);
    newTodo.appendChild(removeButton);
    input.value = '';
}); 