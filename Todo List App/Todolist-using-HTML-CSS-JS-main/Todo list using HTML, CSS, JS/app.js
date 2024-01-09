// Get elements from the DOM
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentNode;
    taskList.removeChild(li);
}
