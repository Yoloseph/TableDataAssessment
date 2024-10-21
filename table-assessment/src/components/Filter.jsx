import { useEffect, useState } from "react";

function Filter({ tableData, handleChange }) {
  const [selectedColumn, setSelectedColumn] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    handleChange(selectedColumn, selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    setSelectedValue("");
  }, [selectedColumn]);

  const columnDataBlock = (data) => {
    let option = [];
    option.push(<option key="default" value=""></option>);
    Object.keys(data).forEach((element) => {
      option.push(<option value={element}>{element}</option>);
    });
    return (
      <select onChange={(e) => setSelectedColumn(e.target.value)}>
        {option}
      </select>
    );
  };

  const valuesDataBlock = (data) => {
    let option = [];
    option.push(<option key="default" value=""></option>);
    if (data && selectedColumn) {
      Object.keys(data).forEach((element) => {
        if (selectedColumn === element) {
          data[selectedColumn].forEach((element2) => {
            option.push(
              <option key={element2} value={element2}>
                {element2}
              </option>
            );
          });
        }
      });
    }
    return (
      <select
        defaultValue={""}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {option}
      </select>
    );
  };

  return (
    <div>
      <h1>Filter </h1>
      <p>Column</p>
      {columnDataBlock(tableData)}
      <p>Value</p>
      {valuesDataBlock(tableData)}
    </div>
  );
}

export default Filter;
