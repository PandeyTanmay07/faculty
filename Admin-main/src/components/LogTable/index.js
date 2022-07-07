import React from "react";
// import JsonData from './data.json'
import axios from "axios";
import { useFetch } from "../../hooks/useFetch";
import API from "../../API";
function JsonDataDisplay() {
  const { content, loading, error } = useFetch(API.fetchLogs(), false, "logs");
  let logs = [];
  if (!loading && !error && content?.logs) {
    logs = content.logs[0];
  }
  console.log(logs);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Log Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Type</th>
            <th>Affected Table</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((info) => {
            // console.log(info);
            return (
              <tr>
                <td>{info.logId}</td>
                <td>{info.uid}</td>
                <td>{info.title}</td>
                <td>{info.description}</td>
                <td>{info.createdAt}</td>
                <td>{info.type}</td>
                <td>{info.tableAffected}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
