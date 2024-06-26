const addTaskButton = document.getElementById("addTask");

addTaskButton.addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const taskInputValue = taskInput.value.trim();

  if (!taskInputValue == "") {
    const listContainer = document.getElementById("listContainer");
    const li = document.createElement("li");

    li.innerHTML =
      ' <input type="checkbox" id="checkbox">' +
      taskInputValue +
      '<span onclick="deleteTask(this)" ><i class="fas fa-trash" ></i></span>';
      listContainer.appendChild(li);

      taskInput.value = '';
  } else {
    alert("please add a task");
  }
});


//?------- Delete Task individual--------------
const deleteTask = (btn) => {
  const li = btn.parentNode;
  li.parentNode.removeChild(li)
}


//?------- delete checked button--------------

const checkedButtonDelete = () => {
  const listContainer = document.getElementById("listContainer");

  const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked')


  checkedBoxes.forEach((checkBox) => {
    const li = checkBox.parentNode
    li.parentNode.removeChild(li)
 })
}
