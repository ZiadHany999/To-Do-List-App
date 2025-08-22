let tasks = [];

// إضافة مهمة جديدة
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText) {
    tasks.push(taskText);
    input.value = "";
    renderTasks();
  }
}

// عرض المهام
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    // زر تعديل
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editTask(index);

    // زر حذف
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// تعديل مهمة
function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index]);
  if (newTask) {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

// حذف مهمة
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// جلب بيانات المستخدمين من API
function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      const tbody = document.querySelector("#usersTable tbody");
      tbody.innerHTML = "";

      data.forEach(user => {
        const row = `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
    })
    .catch(error => console.error("Error fetching users:", error));
}
