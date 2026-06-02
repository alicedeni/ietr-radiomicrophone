import { IETR_DB } from "../data/ietrDb";

export default function Sidebar({ activeId, onSelect }) {
  return (
    <aside className="sidebar no-print">
      <nav className="sidebar__nav" aria-label="Разделы руководства">
        {IETR_DB.sections.map((s, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <button
              key={s.id}
              type="button"
              className={`nav-item${activeId === s.id ? " nav-item--active" : ""}`}
              onClick={() => onSelect(s.id)}
            >
              <span className="nav-item__num">{num}</span>
              <span>{s.title}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
