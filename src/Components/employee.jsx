import React from "react";
import ListEmployees from "./ListEmployees";
import TestData from "../TestData/employeedetails";
import Applyleave from "../Forms/ApplyLeave";

export const viewEmployee = () => {
  return (
    <div>
      <ListEmployees data={TestData} />
    </div>
  );
};

export const myApprovals = () => {
  return (
    <div>
      <p> MyApprovals </p>
    </div>
  );
};

export const addEmployee = () => {
  return (
    <div>
      <p> AddEmployee </p>
    </div>
  );
};

export const myLeaves = () => {
  return (
    <div>
      <p> My leaves </p>
      <Applyleave />
    </div>
  );
};
