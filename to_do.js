function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("taskList");

    var li = document.createElement("li");
    li.innerHTML = '<span class="taskText">' + taskText + '</span>' +
        '<button onclick="completeTask(this)">Complete</button>' +
        '<button onclick="deleteTask(this)">Delete</button>';

    taskList.appendChild(li);
    input.value = "";
}

function completeTask(button) {
    var taskText = button.previousElementSibling;
    taskText.classList.toggle("completed");
}

function deleteTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}
