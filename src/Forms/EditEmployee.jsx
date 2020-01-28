import React, { Component } from "react";
class EditEmployee extends Component {
  render() {
    return (
      <form>
        <div className="form-group col-md-6">
          <label for="Id">ID</label>
          <input className="form-control" id="ID" name="ID" type="text" />
        </div>

        <div className="form-group col-md-6">
          <label for="EmployeeID">EmployeeID</label>
          <input
            className="form-control"
            id="EmployeeID"
            name="EmployeeID"
            type="text"
          />
        </div>

        <div className="form-group col-md-6">
          <label for="FirstName">FirstName</label>
          <input
            id="FirstName"
            className="form-control"
            name="FirstName"
            type="text"
          />
        </div>
        <div className="form-group col-md-6">
          <label for="LastName">LastName</label>
          <input
            id="LastName"
            className="form-control"
            name="LastName"
            type="text"
          />
        </div>

        <div className="form-group col-md-6">
          <label for="DOB">DOB</label>
          <input
            id="LastName"
            className="form-control"
            name="LastName"
            type="text"
          />
        </div>

        <div className="form-group col-md-6 ">
          <label for="DOJ">DOJ</label>
          <input
            id="LastName"
            className="form-control"
            name="LastName"
            type="text"
          />
        </div>
        <div className="form-group col-md-6 ">
          <label for="TotalLeaves">TotalLeaves</label>
          <input
            id="LastName"
            className="form-control"
            name="LastName"
            type="text"
          />
        </div>

        <div className="form-group col-md-6 ">
          <label for="CausualLeaves">CausualLeaves</label>
          <input
            id="LastName"
            className="form-control"
            name="LastName"
            type="text"
          />
        </div>

        <div className="form-group col-md-6 ">
          <label for="SickLeaves">SickLeaves</label>
          <input
            id="LastName"
            className="form-control"
            name="LastName"
            type="text"
          />
        </div>

        <div className="form-group col-md-6">
          <label for="PublicHolidays">PublicHolidays</label>
          <input
            id="LastName"
            className="form-control"
            name="LastName"
            type="text"
          />
        </div>
        <button>Edit</button>
      </form>
    );
  }
}
export default EditEmployee;
