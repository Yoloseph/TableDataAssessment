import { useState } from "react";
import "./Table.css";

function Table({ userData, tableData }) {
  const [useZebraStyling, setUseZebraStyling] = useState(true);

  const getHeaders = (data) => {
    let header = [];
    if (data) {
      Object.keys(data).forEach((element) => {
        header.push(
          <th className={useZebraStyling ? "header_zebra" : "header"}>
            {element}
          </th>
        );
      });
    }
    return <>{header}</>;
  };

  const getData = (data) => {
    let row = [];
    let level = 1;
    if (data) {
      data.forEach((element) => {
        row.push(
          <tr
            className={
              level % 2 === 0
                ? useZebraStyling
                  ? "even_zebra"
                  : "even"
                : useZebraStyling
                ? "odd_zebra"
                : "odd"
            }
            data-row-level={level}
          >
            {Object.values(element).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        );
        level++;
      });
    }
    return row;
  };

  const handleStyleChange = () => {
    setUseZebraStyling(!useZebraStyling);
  };

  return (
    <div>
      <button className="btn" onClick={() => handleStyleChange()}>
        Change table style
      </button>
      <table id="data-table">
        <thead>
          <tr>{getHeaders(tableData)}</tr>
        </thead>
        <tbody id="table-body">{getData(userData)}</tbody>
      </table>
    </div>
  );
}

export default Table;
