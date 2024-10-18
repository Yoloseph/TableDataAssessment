import { useState } from "react";

function Table(tableInfo) {
  const getHeaders = (data) => {
    let header = [];
    if (data.headerInfo) {
      Object.keys(data.headerInfo).forEach((element) => {
        header.push(<th>{element}</th>);
      });
    }
    return <>{header}</>;
  };

  const getData = (data) => {
    let row = [];
    let level = 1;
    if (data.tableInfo) {
      data.tableInfo.forEach((element) => {
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
          <tr>{getHeaders(tableInfo)}</tr>
        </thead>
        <tbody id="table-body">{getData(tableInfo)}</tbody>
      </table>
    </div>
  );
}

export default Table;
