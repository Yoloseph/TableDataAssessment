import { useEffect, useState } from "react";
import "./Filter.css";

function Filter({ tableData, handleChange }) {
  const [selectedPairs, setSelectedPairs] = useState([]);

  useEffect(() => {
    handleChange(selectedPairs);
  }, [selectedPairs]);

  const handleOption = (key, value) => {
    if (value) {
      setSelectedPairs((prev) => {
        const updatedPairs = [...prev];
        const pairIndex = updatedPairs.findIndex((pair) => pair.key === key);
        if (pairIndex !== -1) {
          updatedPairs[pairIndex].value = value;
        } else {
          if (value === "") {
          }
          updatedPairs.push({ key, value });
        }
        return updatedPairs;
      });
    } else {
      setSelectedPairs((prev) => prev.filter((pair) => pair.key !== key));
    }
  };

  const columnDataBlock = (data) => {
    const selects = [];
    Object.keys(data).forEach((key) => {
      let options = [];
      options.push(<option value="" key="blank-option"></option>);
      data[key].forEach((value) => {
        options.push(
          <option value={value} key={value}>
            {value}
          </option>
        );
      });
      selects.push(
        <div className="dropdown">
          <p>{key}</p>
          <select
            className="select"
            key={key}
            onChange={(e) => handleOption(key, e.target.value)}
          >
            {options}
          </select>
        </div>
      );
    });
    return selects;
  };

  return <div className="filters">{columnDataBlock(tableData)}</div>;
}

export default Filter;
