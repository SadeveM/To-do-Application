const todoList = document.querySelector(".todo-list");
const button = document.querySelector(".todo-add");
const inputBox = document.querySelector("#task-input-box")

loadData();

function addTask() {
    if ((inputBox.value.replace(/\s/g,'') == "")){
        alert("Input a task")
    } else {
        let li = document.createElement("li");
        let tickSpan = document.createElement("span");
        tickSpan.classList.add("tick-btn");

        let span = document.createElement("span")
        span.classList.add("cross-btn")
        span.innerHTML ="\u00d7"

        li.innerHTML = inputBox.value;
        li.appendChild(tickSpan);
        li.appendChild(span);

        todoList.appendChild(li);
        saveData();
    }
    inputBox.value = "";
}

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("cross-btn")) {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        e.target.children[0].classList.toggle("ticked");
        if (e.target.children[0].classList.contains("ticked")) 
            e.target.children[0].innerHTML = "\u2713"
        else
            e.target.children[0].innerHTML = ""
        saveData();
    } else if (e.target.classList.contains("tick-btn")) {
        e.target.parentElement.classList.toggle("checked");
        e.target.classList.toggle("ticked");
        if (e.target.classList.contains("ticked")) 
            e.target.innerHTML = "\u2713"
        else
            e.target.innerHTML = ""
    }
}) 

function saveData() {
    localStorage.setItem("data", todoList.innerHTML);
}

function loadData() {
    todoList.innerHTML = localStorage.getItem("data");
}

