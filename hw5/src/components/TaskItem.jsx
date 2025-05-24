function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className={`task-text ${task.completed ? 'done' : ''}`}>
        {task.text}
      </span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;
