import Viewer3D from "./Viewer3D";
import { useState } from "react";

export default function ViewerPanel({ selectedPart, stepHint, onPickPart }) {
  const [autoRotate, setAutoRotate] = useState(false);
  const [resetTick, setResetTick] = useState(0);

  return (
    <aside className="viewer-panel no-print">
      <div className="viewer-panel__controls">
        <button
          type="button"
          className={`btn btn--outline btn--xs${autoRotate ? " is-active" : ""}`}
          onClick={() => setAutoRotate((v) => !v)}
        >
          {autoRotate ? "Автовращение: ВКЛ" : "Автовращение: ВЫКЛ"}
        </button>
        <button
          type="button"
          className="btn btn--outline btn--xs"
          onClick={() => setResetTick((v) => v + 1)}
        >
          Сброс вида
        </button>
      </div>

      <Viewer3D onPickPart={onPickPart} autoRotate={autoRotate} resetTick={resetTick} />
      {stepHint && <p className="viewer-panel__step">{stepHint}</p>}
      <div className={`part-card part-card--side${selectedPart ? " part-card--selected" : ""}`}>
        <div className="part-card__label">Элемент</div>
        <div className="part-card__name">{selectedPart ? selectedPart.name : "-"}</div>
        {selectedPart && <div className="part-card__desc">{selectedPart.desc}</div>}
      </div>
    </aside>
  );
}
