import { useState } from "react";
import "./Table.css";

function Table({ userData, tableData }) {
  const getHeaders = (data) => {
    let header = [];
    if (data) {
      Object.keys(data).forEach((element) => {
        header.push(<th>{element}</th>);
      });
    }
    return <>{header}</>;
  };

  const getData = (data) => {
    let row = [];
    let level = 1;
    if (data) {
      data.forEach((element) => {
        row.push(
          <tr data-row-level={level}>
            {Object.values(element).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        );
        level++;
      });
    }
    return row;
  };

  return (
    <div>
      <h1>Table </h1>
      <table id="data-table">
        <thead>
          <tr>{getHeaders(tableData)}</tr>
        </thead>
        <tbody id="table-body">{getData(userData)}</tbody>
      </table>
    </div>
  );
}

export default Table;
