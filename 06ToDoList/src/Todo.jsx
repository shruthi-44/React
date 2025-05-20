import React, { useState,useEffect } from 'react';

function FilterBar({ selectedTag, onChange }) {
  const tags = ["All", "Work", "Personal", "Urgent"];
  return (
    <div className="mb-4">
      <label className="mr-2 font-medium">Filter:</label>
      <select
        value={selectedTag}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 px-2 py-1 rounded"
      >
        {tags.map((tag) => (
          <option key={tag}>{tag}</option>
        ))}
      </select>
    </div>
  );
}

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [newTaskTag, setNewTaskTag] = useState("Personal");

// Load tasks from localStorage on mount
useEffect(() => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
}, []);

// Save tasks to localStorage whenever they change
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleTagChange(event) {
    setNewTaskTag(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, tag: newTaskTag,completed: false }]);
    setNewTask("");
    setNewTaskTag("Personal");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  function toggleComplete(index) {
  const updatedTasks = [...tasks];
  updatedTasks[index].completed = !updatedTasks[index].completed;
  setTasks(updatedTasks);
}

  const filteredTasks =
    selectedTag === "All"
      ? tasks
      : tasks.filter((task) => task.tag === selectedTag);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-5xl font-bold text-blue-700 mb-6">To-Do List</h1>

      <div className="flex flex-col md:flex-row gap-3 mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          className="border border-gray-300 rounded px-3 py-2 w-full"
          onChange={handleInputChange}
        />
        <select
          value={newTaskTag}
          onChange={handleTagChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Urgent">Urgent</option>
        </select>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <FilterBar selectedTag={selectedTag} onChange={setSelectedTag} />

      <ul className="w-full max-w-md space-y-2">
        {filteredTasks.map((task, index) => (
          <li
  key={index}
  className="flex justify-between items-center px-4 py-2 bg-white rounded shadow-sm"
>
  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleComplete(index)}
    />
    <span className={task.completed ? "line-through text-gray-500" : ""}>
      {task.text} ({task.tag})
    </span>
  </div>
  <button
    onClick={() => deleteTask(index)}
    className="text-red-500 hover:text-red-700"
  >
    Delete
  </button>
</li>

        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

