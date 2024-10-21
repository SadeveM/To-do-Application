const todoList = document.querySelector(".todo-list");
const button = document.querySelector(".todo-add");
const inputBox = document.querySelector("#task-input-box")

loadData();

function addTask() {
    if ((inputBox.value.replace(/\s/g,'') == "")){
        alert("Input a task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span")
        span.innerHTML ="\u00d7"

        li.appendChild(span);
        todoList.appendChild(li);
        saveData();
    }
    inputBox.value = "";
}

todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
}) 

function saveData() {
    localStorage.setItem("data", todoList.innerHTML);
}

function loadData() {
    todoList.innerHTML = localStorage.getItem("data");
}

