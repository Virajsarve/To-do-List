const taskInput = document.getElementById("TP");
const addButton = document.getElementById("addbutton");
const taskList = document.getElementById("tasklist");

let tasks = [];

addButton.addEventListener("click", function(){
    const task = {
        id: Date.now(),
        text: taskInput.value,
        completed: false,
    };
    tasks.push(task);
    displayTasks();
    taskInput.value="";
});

function displayTasks(){
    taskList.innerHTML = "";
    for(let i = 0; i < tasks.length; i++){
        const task = tasks [i];
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function(){
            task.completed = !task.completed;
            displayTasks();  
        });
        const taskText = document.createElement("span");
        taskText.textContent = task.text;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function(){
            tasks = tasks.filter(function (t){
                return t.id !== task.id;
        });
        displayTasks();
        });
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

    }
}