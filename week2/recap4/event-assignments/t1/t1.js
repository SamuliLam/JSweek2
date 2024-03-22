// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

let ul = document.querySelector('ul');

todoList.forEach(todo => {
  let li = document.createElement('li');
  ul.appendChild(li);

  let input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'todo-' + todo.id;
  input.checked = todo.completed;
  li.appendChild(input);

  let label = document.createElement('label');
  label.innerText = todo.task;
  label.htmlFor = 'todo-' + todo.id;
  li.appendChild(label);

  input.addEventListener('change', function () {
    todo.completed = this.checked;
    console.log(todoList);
  });

  let button = document.createElement('button');
  li.appendChild(button);
  button.innerText = 'Delete';
  button.addEventListener('click', function () {
    ul.removeChild(li);
    todoList.splice(todoList.indexOf(todo), 1);
    console.log(todoList);
  });
});

let addButton = document.querySelector('.add-btn');
let modal = document.querySelector('dialog');
let form = modal.querySelector('form');
let input = form.querySelector('input[type="text"]');
let saveButton = form.querySelector('button[type="submit"]');

addButton.addEventListener('click', function () {
  modal.showModal();
});


form.addEventListener('submit', function (event) {
  event.preventDefault();

  let newTodo = {
    id: todoList.length + 1,
    task: input.value,
    completed: false,
  };

  todoList.push(newTodo);

  console.log(todoList);

  let li = document.createElement('li');

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'todo-' + newTodo.id;
  checkbox.checked = newTodo.completed;
  li.appendChild(checkbox);

  let label = document.createElement('label');
  label.innerText = newTodo.task;
  label.htmlFor = 'todo-' + newTodo.id;
  li.appendChild(label);

  ul.appendChild(li);

  checkbox.addEventListener('change', function () {
    newTodo.completed = this.checked;
    console.log(todoList);
  });

  let button = document.createElement('button');
  li.appendChild(button);
  button.innerText = 'Delete';
  button.addEventListener('click', function () {
    ul.removeChild(li);
    todoList.splice(todoList.indexOf(newTodo), 1);
    console.log(todoList);
  });

  input.value = '';
  modal.close();
});

saveButton.addEventListener('click', function (event) {
  event.preventDefault();

  form.dispatchEvent(new Event('submit'));
});
