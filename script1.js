const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add a new task
function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("You must write something!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const span = document.createElement("span");
    span.textContent = "\u00D7";
    span.title = "Delete task";

    li.appendChild(span);
    listContainer.appendChild(li);

    inputBox.value = "";

    saveData();
}


// Check/uncheck task OR delete task
listContainer.addEventListener("click", function (e) {

    // Check/uncheck
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    // Delete
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

});


// Save tasks
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}


// Load tasks
function showTask() {
    const savedData = localStorage.getItem("data");

    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

showTask();


// Press Enter to add task
inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});