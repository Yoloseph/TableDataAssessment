import { useState } from "react";
import "./Table.css";

function Table({ userData, tableData }) {
  const [useZebraStyling, setUseZebraStyling] = useState(true);
  const [rowsList, setRowsList] = useState({});

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

  const handleShowHidden = (rowKey) => {
    setRowsList((prev) => ({
      ...prev,
      [rowKey]: !prev[rowKey],
    }));
  };

  const getData = (data) => {
    let row = [];
    let level = 1;
    if (data) {
      data.forEach((element, parentIndex) => {
        const rowKey = `parent-${parentIndex}`;
        row.push(
          <tr
            key={rowKey}
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
            {Object.keys(element)
              .filter((key) => key !== "children")
              .map((key, index) => (
                <td key={index}>
                  {element[key]}
                  {element[key] === "Europe" ||
                  element[key] === "Asia" ||
                  element[key] === "All Articles" ||
                  element[key] === "All Entities" ? (
                    <a
                      className={rowsList[rowKey] ? "minus-icon" : "plus-icon"}
                      onClick={() => handleShowHidden(rowKey)}
                    ></a>
                  ) : null}
                </td>
              ))}
          </tr>
        );
        if (element.children && element.children.length !== 0) {
          element.children.forEach((element2, childIndex) => {
            row.push(
              <tr
                key={`${rowKey}-child-${childIndex}`}
                className={rowsList[rowKey] ? "hiddenRow" : "hiddenRow hidden"}
                data-row-level={level}
              >
                {Object.values(element2).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            );
          });
        }
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
