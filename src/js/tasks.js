// src/js/tasks.js

const tasks = [];  // Array temporal para almacenar las tareas

// Función para agregar una tarea
function addTask(title, description, assignedTo) {
  const task = {
    id: tasks.length + 1,
    title,
    description,
    assignedTo,
    status: 'Pendiente',
    date: new Date()
  };
  tasks.push(task);
  return task;
}

// Exportar las funciones necesarias
module.exports = { addTask, tasks };
