export default function Modal({ title, children, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{title}</h3>
        {children}
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
