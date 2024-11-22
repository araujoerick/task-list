const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");
  const taskContent = document.createElement("p");
  taskContent.innerText = inputElement.value;

  const deleteItem = document.createElement("button");
  deleteItem.classList.add("delete-item");
  const deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", "./assets/img/delete-icon.svg");
  deleteItem.appendChild(deleteIcon);

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer.appendChild(taskItemContainer);

  inputElement.value = "";
};

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
};

addTaskButton.addEventListener("click", handleAddTask);
inputElement.addEventListener("change", handleInputChange);
