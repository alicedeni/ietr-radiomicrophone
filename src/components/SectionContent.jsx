import { IETR_DB } from "../data/ietrDb";

function ProcedureSection({ procedureId, stepIndex, onStepChange }) {
  const proc = IETR_DB.procedures[procedureId];
  if (!proc) return null;

  return (
    <>
      <p className="procedure-route">{proc.route}</p>
      <ol className="procedure-steps">
        {proc.steps.map((step, i) => (
          <li
            key={step.text}
            className={`procedure-step${i === stepIndex ? " procedure-step--active" : ""}`}
            onClick={() => onStepChange(i)}
            onKeyDown={(e) => e.key === "Enter" && onStepChange(i)}
            role="button"
            tabIndex={0}
          >
            <span className="procedure-step__num">{i + 1}</span>
            <span className="procedure-step__text">{step.text}</span>
          </li>
        ))}
      </ol>
      <p className="procedure-route">
        Шаг {stepIndex + 1} / {proc.steps.length}
      </p>
    </>
  );
}

export default function SectionContent({
  sectionId,
  stepIndex,
  onStepChange,
  onSelectPart,
}) {
  const section = IETR_DB.sections.find((s) => s.id === sectionId);
  if (!section || section.kind === "bom") return null;

  switch (section.kind) {
    case "general":
      return (
        <table className="data-table">
          <tbody>
            <tr>
              <th>Назначение</th>
              <td>FM-передатчик 80–110 МГц</td>
            </tr>
            <tr>
              <th>Питание</th>
              <td>9 В, 12–16 мА</td>
            </tr>
            <tr>
              <th>Класс ЭБ</th>
              <td>III (SELV)</td>
            </tr>
            <tr>
              <th>Плата</th>
              <td>44×34×1,6 мм, FR-4</td>
            </tr>
          </tbody>
        </table>
      );

    case "procedure":
      return (
        <ProcedureSection
          procedureId={section.procedureId}
          stepIndex={stepIndex}
          onStepChange={onStepChange}
        />
      );

    case "operation":
      return (
        <ol className="plain-list">
          <li>Антенна → ANT_OUT</li>
          <li>Микрофон → MIC_IN</li>
          <li>Питание 9 В → BAT</li>
          <li>Настройка FM-приёмника</li>
          <li>
            Подстройка частоты -{" "}
            <button type="button" className="link-btn" onClick={() => onSelectPart("C6")}>
              C6
            </button>
          </li>
        </ol>
      );

    case "maintenance":
      return (
        <table className="data-table">
          <thead>
            <tr>
              <th>Симптом</th>
              <th>Проверить</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Нет несущей</td>
              <td>T2, L1, C6, 9 В, антенна</td>
            </tr>
            <tr>
              <td>Нет звука</td>
              <td>T1, микрофон, MIC_IN</td>
            </tr>
            <tr>
              <td>Греется T2</td>
              <td>Антенна, R7</td>
            </tr>
          </tbody>
        </table>
      );

    case "safety":
      return (
        <ul className="plain-list">
          <li>SELV 9 В, класс III</li>
          <li>Пайка - вентиляция, защита глаз</li>
          <li>IP53 - без влаги в корпусе</li>
        </ul>
      );

    case "specs":
      return (
        <table className="data-table">
          <tbody>
            <tr>
              <th>Плата</th>
              <td>44×34×1,6 мм</td>
            </tr>
            <tr>
              <th>Изделие</th>
              <td>15×10×6 см, до 80 г</td>
            </tr>
            <tr>
              <th>Ток</th>
              <td>12–16 мА</td>
            </tr>
            <tr>
              <th>Частота</th>
              <td>80–110 МГц</td>
            </tr>
            <tr>
              <th>Корпус</th>
              <td>АБС, 51×41 мм</td>
            </tr>
          </tbody>
        </table>
      );

    default:
      return null;
  }
}
