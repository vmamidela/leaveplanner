import React from "react";
import { Link } from "react-router-dom";
export default function listEmployees(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>EmployeeID</th>
          <th>FirstName</th>
          <th>MiddleName</th>
          <th>LastName</th>
          <th>DOB</th>
          <th>DOJ</th>
          <th>TotalLeaves</th>
          <th>CausualLeaves</th>
          <th>SickLeaves</th>
          <th>WorkFromHome</th>
          <th>PlannedLeaves</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(row => (
          <tr>
            <td align="center">{row.EmployeeID}</td>
             <td align="center">{row.FirstName}</td>
            <td align="center">{row.MiddleName}</td>
            <td align="center">{row.LastName}</td>
            <td align="center">{row.DOB}</td>
            <td align="center">{row.DOJ}</td>
            <td align="center">{row.AllocatedAnnualLeave.TotalLeaves}</td>
            <td align="center">{row.AllocatedAnnualLeave.CausualLeaves}</td>
            <td align="center">{row.AllocatedAnnualLeave.SickLeaves}</td>
            <td align="center">{row.UsedLeaves.WorkFromHome}</td>
            <td align="center">{row.UsedLeaves.PlannedLeaves}</td>
            <Link to="/employeEdit"> Edit </Link>
            <Link to="/view"> Delete </Link>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
