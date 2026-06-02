import { IETR_DB } from "../data/ietrDb";

function BomTable({ selectedId, onSelect }) {
  return (
    <table className="data-table data-table--compact">
      <thead>
        <tr>
          <th>Поз.</th>
          <th>Элемент</th>
          <th>Номинал</th>
          <th>Кол.</th>
        </tr>
      </thead>
      <tbody>
        {IETR_DB.bom.map((row) => {
          const keys = row.id.split(",").map((s) => s.trim());
          const isSelected = keys.some((k) => k === selectedId);
          return (
            <tr
              key={row.id}
              className={`bom-row${isSelected ? " bom-row--selected" : ""}`}
              onClick={() => onSelect(keys[0])}
            >
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.value}</td>
              <td>{row.qty}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function PcbSection({ selectedPartId, onSelectPart }) {
  return (
    <div className="main-content">
      <BomTable selectedId={selectedPartId} onSelect={onSelectPart} />
    </div>
  );
}
