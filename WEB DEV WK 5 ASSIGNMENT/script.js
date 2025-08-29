
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const footerMessage = document.getElementById('footer-message');

let tasks = [];

if (tasks.length === 0) {
    footerMessage.textContent = 'Add your first task above!';
}


function addTask() {
    const newTaskText = taskInput.value.trim();
    if (newTaskText !== '') {
        tasks.push(newTaskText);
        taskInput.value = '';
        renderTasks();
    } else {
        alert('Please enter a task!');
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    if (tasks.length === 0) {
        footerMessage.textContent = 'No tasks yet. Get started!';
        return;
    }
    for (let i = 0; i < tasks.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = tasks[i];
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => {
            tasks.splice(i, 1);
            renderTasks();
        });
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }
    footerMessage.textContent = `You have ${tasks.length} tasks to complete.`;
}
console.log("--- Checking for tasks starting with 'A' ---");
let index = 0;
while (index < tasks.length) {
    if (tasks[index].startsWith('A')) {
        console.log(`Task at index ${index} starts with 'A': ${tasks[index]}`);
    }
    index++;
}
addTaskButton.addEventListener('click', addTask);