import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import Filter from "./components/Filter";
import dataTable from "./mock/mockDataTable.json";
import dataUsers from "./mock/mockDataUsers.json";

function App() {
  const [tableData, setTableData] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    retrieveData();
  }, [tableData, userData]);

  //ToDo Make it assynchronous
  const retrieveData = () => {
    if (dataTable && dataUsers) {
      setTableData(dataTable.header);
      setUserData(dataUsers);
    }
  };

  return (
    <div className="App">
      <h1>Table Data</h1>

      <p>Filtering area</p>
      {<Filter tableInfo={tableData} />}
      <p>Table area</p>
      {<Table data={userData} />}
    </div>
  );
}

export default App;
