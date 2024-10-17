import { useEffect, useState } from "react";

function Filter(data) {
  //const [columnValue, setTableData] = useState([]);

  useEffect(() => {
    if (data) {
    }
  }, []);

  const columnDataBlock = (data) => {
    let option = [];
    if (data) {
      Object.keys(data.data).forEach((element) => {
        option.push(<option value="element">{element}</option>);
      });
    }
    return <select>{option}</select>;
  };

  const valuesDataBlock = (data) => {
  //ToDo 
  };

  return (
    <div>
      <h1>Filter </h1>
      <p>Column</p>
      {columnDataBlock(data)}
      {/* <select>
        <option value="someOption">Column option</option>
        <option value="otherOption">Other Column option</option>
      </select> */}

      <p>Value</p>
      <select>
        <option value="someOption">Value option</option>
        <option value="otherOption">Other Value option</option>
      </select>
    </div>
  );
}

export default Filter;
