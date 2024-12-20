// Load tasks from localStorage when the page loads

function addTask() {
    let taskInput = document.getElementById("task");
    let task = taskInput.value;

    if (task !== "") {
        let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.push(task);
        localStorage.setItem("tasks", JSON.stringify(taskList));
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    let ul = document.getElementById("list");
    ul.innerHTML = "";
    let count = 1;
    taskList.forEach(function (task, index) {
        let li = document.createElement("li");

        li.textContent = ` Task ${count++}  : ${task}`;
        let deleteBtn = document.getElementById("delete-btn");
        deleteBtn.onclick = function () {
            deleteTask(index);
        }
        ul.appendChild(li);
    });
}

function deleteTask(index) {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    displayTasks();
}