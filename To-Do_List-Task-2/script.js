function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  var li = document.createElement("li");
  li.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(btn) {
  var li = btn.parentNode;
  li.parentNode.removeChild(li);
}
