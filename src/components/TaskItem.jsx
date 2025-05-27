import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask, updateTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditSubmit = () => {
    if (editedText.trim()) {
      updateTask(task.id, editedText.trim());
    }
    setIsEditing(false);
  };

  const today = new Date().toISOString().split("T")[0];
  const isDeadlineToday = task.deadline === today;
  const isDeadlinePast = task.deadline && task.deadline < today;

  let taskItem = "task-item";
  if (isDeadlinePast) {
    taskItem += " deadline-past";
  } else if (isDeadlineToday) {
    taskItem += " deadline-today";
  }

  return (
    <li className={taskItem}>
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={handleEditSubmit}
            onKeyDown={(e) => e.key === "Enter" && handleEditSubmit()}
            autoFocus
            className="edit-input"
          />
        ) : (
          <span className="task-text">{task.text}</span>
        )}
        <span className="task-deadline">{task.deadline}</span>
      </div>
      <div className="task-right">
        <button onClick={() => setIsEditing(true)} title="Edit Task">
          🖉
        </button>
        <button onClick={() => deleteTask(task.id)} title="Delete Task">
          🗑
        </button>
      </div>
    </li>
  );
}
