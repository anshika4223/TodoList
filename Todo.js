document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector('span').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = '';
}