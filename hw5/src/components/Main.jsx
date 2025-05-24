import { useState, useEffect } from "react";
import TaskList from "./TaskList";

function Main() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => setInput(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: input,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setInput('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="main">
      <h1>Note your tasks</h1>
      <p>{new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}</p>

      <input
        type="text"
        placeholder="Task name"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default Main;
