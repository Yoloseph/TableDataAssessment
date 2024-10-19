import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Filter from "./components/Filter";
import axios from "axios";

function App() {
  const [tableData, setTableData] = useState([]);
  const [tableDataDefault, setTableDataDefault] = useState([]);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("/mock/mockDataTable.json"),
      axios.get("/mock/mockDataUsers.json"),
    ])
      .then(([tableResponse, userResponse]) => {
        setTableData(tableResponse.data.header);
        setTableDataDefault(userResponse.data);
        setUserData(userResponse.data);
      })
      .catch((error) => {
        console.error("Error loading the JSON files:", error);
      });
  }, []);

  const handleFilter = (data) => {
    if (data.length >= 2) {
      setUserData(handleTableDataFilter(data, tableDataDefault));
    } else {
      setUserData(tableDataDefault);
    }
  };

  const handleTableDataFilter = (filterData, tableData) => {
    let filteredResults = [];
    tableData.forEach((item) => {
      let shouldInclude = true;
      filterData.forEach((filter) => {
        if (
          filter.value === "All Articles" ||
          filter.value === "Europe" ||
          filter.value === "All Entities"
        ) {
          return;
        }
        if (item[filter.key] !== filter.value) {
          shouldInclude = false;
        }
      });
      if (shouldInclude) {
        filteredResults.push(item);
      }
    });

    return filteredResults; // Return the array of filtered results
  };

  return (
    <div className="App">
      <h1>Table Assessment</h1>
      {tableData && (
        <Filter
          tableData={tableData}
          handleChange={(data) => handleFilter(data)}
        />
      )}
      {userData && tableData && (
        <Table userData={userData} tableData={tableData} />
      )}
    </div>
  );
}

export default App;
