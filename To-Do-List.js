function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
      alert("Masukin Tugasnya Dlu Woiii");
      return;
  }

  var li = document.createElement("li");
  var taskText = document.createElement("span");
  taskText.textContent = taskInput.value;

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus";
  deleteButton.onclick = function() {
      taskList.removeChild(li);
      alert("HAPOOOOOSSS")
  };

  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = function() {
      var newText = prompt("Edit aja :", taskText.textContent);
      if (newText !== null) {
          taskText.textContent = newText;
      }
  };

  var completeButton = document.createElement("button");
  completeButton.textContent = "Selesai";
  completeButton.onclick = function() {
      li.classList.toggle("completed");
      alert("Kelar Juga Ni Tugas")
  };

  li.appendChild(taskText);
  li.appendChild(deleteButton);
  li.appendChild(editButton);
  li.appendChild(completeButton);
  taskList.appendChild(li);

  taskInput.value = "";
}

const button = document.getElementById("oit")

button.addEventListener("click", function () {
  alert("Log Out BYE BYEEE")
  window.location.href = "index.html"
})