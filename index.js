const todoList = document.querySelector(".todo-list");
const button = document.querySelector(".todo-add");
const inputBox = document.querySelector("#task-input-box")

function addTask() {
    if ((inputBox.value.replace(/\s/g,'') == "")){
        alert("Input a task")
        inputBox.value = "";
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span")
        span.innerHTML ="\u00d7"

        li.appendChild(span);
        todoList.appendChild(li);
    }
}

