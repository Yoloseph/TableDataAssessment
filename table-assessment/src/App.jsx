import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import Filter from "./components/Filter";
import data from "./mock/mockData.json";

function App() {
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    retrieveData();
  }, [tableData, filterData]);

  //ToDo Make it assynchronous
  const retrieveData = () => {
    if (data) {
      setTableData(data.values);
      setFilterData(data.dimensions);
    }
  };

  return (
    <div className="App">
      <h1>Table Data</h1>

      <p>Filtering area</p>
      {<Filter data={filterData} />}
      <p>Table area</p>
      {<Table data={tableData}/>}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
