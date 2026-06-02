import { useCallback, useMemo, useState } from "react";
import { IETR_DB } from "./data/ietrDb";
import DocHeader from "./components/DocHeader";
import Sidebar from "./components/Sidebar";
import SectionContent from "./components/SectionContent";
import PcbSection from "./components/PcbSection";
import ViewerPanel from "./components/ViewerPanel";
import "./App.css";

const NODE_ALIAS = {
  idx_01110: {
    id: "BAT",
    name: "BAT - разъем питания 9 В",
    desc: "Вход питания платы.",
  },
  idx_01112: {
    id: "ANT_OUT",
    name: "ANT_OUT - антенный разъем",
    desc: "Выход на внешнюю антенну (SMA).",
  },
  idx_01122: {
    id: "MIC_IN",
    name: "MIC_IN - разъем микрофона",
    desc: "Вход аудиосигнала от микрофона.",
  },
  idx_01116: {
    id: "C6",
    name: "C6 - подстроечный конденсатор",
    desc: "Элемент подстройки рабочей частоты.",
  },
  idx_01118: {
    id: "C1",
    name: "C-группа - керамические конденсаторы",
    desc: "Группа SMD-конденсаторов (C1, C2, C3, C4, C5, C8).",
  },
  idx_01120: {
    id: "L1",
    name: "L1 - катушка",
    desc: "Контурный индуктивный элемент (по вашей 3D-модели).",
  },
  idx_01128: {
    id: "T1",
    name: "T1 - транзистор KT315",
    desc: "НЧ каскад предварительного усиления.",
  },
  idx_01126: {
    id: "T2",
    name: "T2 - транзистор S9018",
    desc: "ВЧ генератор передатчика.",
  },
  idx_3: {
    id: "C1",
    name: "C-группа - керамические конденсаторы",
    desc: "Группа SMD-конденсаторов (C1, C2, C3, C4, C5, C8).",
  },
  idx_6: {
    id: "R1",
    name: "R-группа - резисторы",
    desc: "Группа SMD-резисторов (R1, R2, R3, R4, R5, R6, R7).",
  },
  idx_7: {
    id: "BAT",
    name: "BAT - разъем питания 9 В",
    desc: "Вход питания изделия.",
  },
  idx_0112: {
    id: "pcb",
    name: "Плата - FR-4",
    desc: "Печатная плата изделия 44×34×1,6 мм.",
  },
  idx_8: {
    id: "ANT_OUT",
    name: "ANT_OUT - антенный разъем",
    desc: "Выход на внешнюю антенну (SMA).",
  },
  idx_27: {
    id: "C7",
    name: "C7 - электролитический конденсатор",
    desc: "Полярный конденсатор 10 мкФ.",
  },
  idx_33: {
    id: "MIC_IN",
    name: "MIC_IN - вход микрофона",
    desc: "Разъем подключения микрофона.",
  },
  idx_57: {
    id: "C6",
    name: "C6 - подстроечный конденсатор",
    desc: "Элемент подстройки рабочей частоты.",
  },
};

function resolvePart(partId) {
  if (!partId) return null;
  const alias = NODE_ALIAS[partId];
  if (alias?.id) {
    const bom = IETR_DB.bom.find((row) =>
      row.id
        .split(",")
        .map((s) => s.trim())
        .includes(alias.id)
    );
    if (bom) {
      return {
        name: `${bom.id} · ${bom.name}`,
        desc: `${bom.value}, ${bom.qty} шт.`,
      };
    }
    return { name: alias.name, desc: alias.desc };
  }
  const bom = IETR_DB.bom.find((row) => {
    const keys = row.id.split(",").map((s) => s.trim());
    return keys.includes(partId);
  });
  if (bom) {
    return {
      name: `${bom.id} · ${bom.name}`,
      desc: `${bom.value}, ${bom.qty} шт.`,
    };
  }
  const p = IETR_DB.parts[partId];
  if (p) return { name: p.name, desc: p.desc };
  if (partId.startsWith("idx_")) {
    return { name: `Узел ${partId.replace("idx_", "#")}`, desc: "Сопоставление для этого узла пока не задано." };
  }
  return { name: partId, desc: "Выбрано по клику на 3D-модели." };
}

export default function App() {
  const [sectionId, setSectionId] = useState(IETR_DB.sections[0].id);
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedPartId, setSelectedPartId] = useState(null);

  const section = IETR_DB.sections.find((s) => s.id === sectionId);
  const isPcb = section?.kind === "bom";

  const stepHint = useMemo(() => {
    if (section?.kind !== "procedure" || !section.procedureId) return null;
    return IETR_DB.procedures[section.procedureId]?.steps[stepIndex]?.text ?? null;
  }, [section, stepIndex]);

  const selectedPart = useMemo(
    () => resolvePart(selectedPartId),
    [selectedPartId]
  );

  const handleSelectSection = useCallback((id) => {
    setSectionId(id);
    setStepIndex(0);
  }, []);

  return (
    <div className="app">
      <DocHeader onPrint={() => window.print()} />

      <div className="app-body">
        <Sidebar activeId={sectionId} onSelect={handleSelectSection} />

        <main className="main">
          <h2 className="page-title">{section?.title}</h2>
          {isPcb ? (
            <PcbSection
              selectedPartId={selectedPartId}
              onSelectPart={setSelectedPartId}
            />
          ) : (
            <div className="main-content">
              <SectionContent
                sectionId={sectionId}
                stepIndex={stepIndex}
                onStepChange={setStepIndex}
                onSelectPart={setSelectedPartId}
              />
            </div>
          )}
        </main>

        <ViewerPanel
          selectedPart={selectedPart}
          stepHint={stepHint}
          onPickPart={setSelectedPartId}
        />
      </div>
    </div>
  );
}
