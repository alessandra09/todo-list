const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formFunc);

function formFunc(event) {
  event.preventDefault();

  const taskText = todoInput.value;

  const newTask = document.createElement('li');

  newTask.innerText = taskText;

  todoList.append(newTask);

  todoInput.value = '';

  todoInput.focus();

  const deleteItem = document.createElement('button');
  deleteItem.setAttribute('role', 'button');
  deleteItem.innerText = 'X';
  newTask.append(deleteItem);

  deleteItem.addEventListener('click', function(){
    this.closest('li').remove();
  })

}
