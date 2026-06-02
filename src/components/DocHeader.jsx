import { IETR_DB } from "../data/ietrDb";

export default function DocHeader({ onPrint }) {
  const { meta } = IETR_DB;
  return (
    <header className="doc-header no-print">
      <div className="doc-header__brand">
        <h1 className="doc-header__title">{meta.title}</h1>
        <p className="doc-header__authors">{meta.authors}</p>
        <p className="doc-header__meta">
          {meta.group} · {meta.organization} · {meta.year}
        </p>
      </div>
      <button type="button" className="btn btn--outline btn--sm" onClick={onPrint}>
        Печать
      </button>
    </header>
  );
}
