export default function Sidebar() {
    const sectionTitles = ['Початок роботи', 'Перенаправлення рефів', 'Фрагменти'];

    return (
        <aside className="sidebar">
            <ul>
                {sectionTitles.map((title, index) => (
                    <li key={index}>{title}</li>
                ))}
            </ul>
        </aside>
    );
}
