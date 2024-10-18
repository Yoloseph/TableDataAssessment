import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Filter from "./components/Filter";
import dataTable from "./mock/mockDataTable.json";
import dataUsers from "./mock/mockDataUsers.json";

function App() {
  const [tableData, setTableData] = useState([]);
  const [userData, setUserData] = useState([]);

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

  const handleFilter = (data) => {
    if(data.length >= 2){

    }else{

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
