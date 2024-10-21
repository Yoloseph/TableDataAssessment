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

  const handleFilter = (column, value) => {
    console.log("handleFilter");
    setUserData(handleTableDataFilter(column, value, tableDataDefault));
  };

  const handleTableDataFilter = (column, value, tableData) => {
    let filteredResults = [];
    tableData.forEach((item) => {
      let shouldInclude = true;
      if (
        item[column] !== value &&
        value !== "All Articles" &&
        value !== "Europe" &&
        value !== "All Entities" &&
        value !== ""
      ) {
        shouldInclude = false;
      }
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
          handleChange={(column, value) => handleFilter(column, value)}
        />
      )}
      {userData && tableData && (
        <Table userData={userData} tableData={tableData} />
      )}
    </div>
  );
}

export default App;
