import { useEffect, useState } from "react";

function Filter(tableInfo) {
  const [selectedColumn, setSelectedColumn] = useState("");

  const columnDataBlock = (data) => {
    let option = [];
    if (data.tableInfo) {
      Object.keys(data.tableInfo).forEach((element) => {
        option.push(<option value={element}>{element}</option>);
      });
    }
    return (
      <select onChange={(e) => setSelectedColumn(e.target.value)}>
        {option}
      </select>
    );
  };

  const valuesDataBlock = (data) => {
    let option = [];
    if (data.tableInfo && selectedColumn) {
      Object.keys(data.tableInfo).forEach((element) => {
        if (selectedColumn === element) {
          data.tableInfo[selectedColumn].forEach((element2) => {
            option.push(<option value="element2">{element2}</option>);
          });
        }
      });
    }
    return <select>{option}</select>;
  };

  return (
    <div>
      <h1>Filter </h1>
      <p>Column</p>
      {columnDataBlock(tableInfo)}
      {/* <select>
        <option value="someOption">Column option</option>
        <option value="otherOption">Other Column option</option>
      </select> */}

      <p>Value</p>
      {valuesDataBlock(tableInfo)}
    </div>
  );
}

export default Filter;
