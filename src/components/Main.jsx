import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskList from "./TaskList";
import Modal from "./Modal";

export default function Main({ search }) {
  const { tasks, addTask } = useTaskContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setTitle("");
    setDeadline("");
    setError("");
  };

  const handleCreate = () => {
    if (!title.trim()) {
      setError("Please enter a task title");
      return;
    }
    addTask(title.trim(), deadline);
    closeModal();
  };

  const filteredTasks = tasks.filter(task => {
    const matchesFilter =
      filter === "completed"
        ? task.completed
        : filter === "incomplete"
        ? !task.completed
        : true;

    const matchesSearch = task.text.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const completedCount = tasks.filter(t => t.completed).length;
  const incompleteCount = tasks.filter(t => !t.completed).length;

  const filteredLabel = {
    all: "All",
    completed: "Completed",
    incomplete: "Incomplete"
  }[filter];

  return (
    <main className="main">
      <aside className="sidebar">
        <button className="create-task-button" onClick={openModal}>
            Create New Task
        </button>
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All ({tasks.length})
          </button>
          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed ({completedCount})
          </button>
          <button
            className={filter === "incomplete" ? "active" : ""}
            onClick={() => setFilter("incomplete")}
          >
            Incomplete ({incompleteCount})
          </button>
        </div>
      </aside>

      <section className="task-section">
        <div className="task-header">
          <h2>{filteredLabel} Tasks</h2>
          <span>{filteredTasks.length} tasks</span>
        </div>
        <TaskList tasks={filteredTasks} />
      </section>

      {modalOpen && (
        <Modal title="Create Task" onClose={closeModal}>
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button onClick={handleCreate}>Create</button>
        </Modal>
      )}
    </main>
  );
}

