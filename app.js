//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo); 

//Functions
function addTodo(event){
    //Prevent form from submitting (refresh browser)
    event.preventDefault();
    
    //Todo DIV - create todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create li 
    const newTodo = document.createElement('li');
    newTodo.innerText = 'This is where todoList title would be';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check Mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to LIST
    todoList.appendChild(todoDiv);
}