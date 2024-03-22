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
});
