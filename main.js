var taskInput = document.getElementById("new-task");
var incompleteTasksHolder = document.getElementById("incomplete-tasks")


var createNewTaskElement = function (taskString) {
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    label.innerText = taskString;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}


var addTask = function () {
    console.log("Add task...");
    var listItem = createNewTaskElement(taskInput.value);
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";
}


var addTask = function () {
    console.log("Add task...");
    var listItem = createNewTaskElement(taskInput.value);
    incompleteTasksHolder.appendChild(listItem);
    taskInput.value = "";

}





var imput = document.querySelector("input")

const enter = (e) => {
    if (e.keyCode === 13) {
        addTask(e)
    } else return
    console.log(e.keyCode)
}

imput.addEventListener('keydown', enter)