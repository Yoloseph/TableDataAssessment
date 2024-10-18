import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Filter from "./components/Filter";
import axios from "axios";

function App() {
  const [tableData, setTableData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("/mock/mockDataTable.json"),
      axios.get("/mock/mockDataUsers.json"),
    ])
      .then(([tableResponse, userResponse]) => {
        setTableData(tableResponse.data.header);
        setUserData(userResponse.data);
      })
      .catch((error) => {
        console.error("Error loading the JSON files:", error);
      });
  }, []);

  const handleFilter = (data) => {
    if (data.length >= 2) {
    } else {
    }
    console.log("recieved data =>", data);
  };

  return (
    <div className="App">
      <h1>Table Data</h1>
      <p>Filtering area</p>
      {tableData && (
        <Filter
          tableData={tableData}
          handleChange={(data) => handleFilter(data)}
        />
      )}
      <p>Table area</p>
      {userData && tableData && (
        <Table userData={userData} tableData={tableData} />
      )}
    </div>
  );
}

export default App;
