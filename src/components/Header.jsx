export default function Header({ search, setSearch }) {
  const today = new Date().toLocaleDateString();

  return (
    <header className="header">
      <h1>Note Your Tasks</h1>

      <div className="center">
        <input
          type="text"
          className="search-input"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>{today}</div>
    </header>
  );
}
