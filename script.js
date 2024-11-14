function addTask() {
  var taskInput = document.getElementById('new-task');
  var taskList = document.getElementById('task-list');
  if (taskInput.value == "") {
    alert('Please enter a task');
    return;
  }

  var listItem = document.createElement('li');
  listItem.innerText = taskInput.value;

  var buttonContainer = document.createElement('div');
  buttonContainer.className = 'task-buttons';

  var deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.onclick = function () {
    taskList.removeChild(listItem);
  };

  var completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  completeButton.onclick = function () {
    listItem.classList.toggle('complete');
  };

  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(completeButton);
  listItem.appendChild(buttonContainer);
  taskList.appendChild(listItem);

  taskInput.value=""
}
