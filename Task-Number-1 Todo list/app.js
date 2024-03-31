const taskInput = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");

function addTask() {
     if(taskInput.value === '') {
         alert("Please Add Task");
     }
    else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u{1F5D1}";
        li.appendChild(span);
    }
    
     taskInput.value = "";
    ourData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        ourData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        ourData();
    }
}, false);

function ourData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function displayTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
displayTask();