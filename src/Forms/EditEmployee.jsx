import React, { Component } from "react";
class EditEmployee extends Component {
  render() {
    return (
      <form>
        <div className="form-group col-md-6">
          <label htmlFor="Id">ID</label>
          <input className="form-control" id="ID" name="ID" type="text" />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="EmployeeID">EmployeeID</label>
          <input
            key="0"
            className="form-control"
            id="EmployeeID"
            name="EmployeeID"
            type="text"
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="FirstName">FirstName</label>
          <input
            key="1"
            id="FirstName"
            className="form-control"
            name="FirstName"
            type="text"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="LastName">LastName</label>
          <input
            key="2"
            id="LastName"
            className="form-control"
            name="LastName"
            type="text"
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="DOB">DOB</label>
          <input
            key="3"
            id="DOB"
            className="form-control"
            name="DOB"
            type="text"
          />
        </div>

        <div className="form-group col-md-6 ">
          <label htmlFor="DOJ">DOJ</label>
          <input
            key="4"
            id="DOJ"
            className="form-control"
            name="DOJ"
            type="text"
          />
        </div>
        <div className="form-group col-md-6 ">
          <label htmlFor="TotalLeaves">TotalLeaves</label>
          <input
            key="5"
            id="TotalLeaves"
            className="form-control"
            name="TotalLeaves"
            type="text"
          />
        </div>

        <div className="form-group col-md-6 ">
          <label htmlFor="CausualLeaves">CausualLeaves</label>
          <input
            key="6"
            id="CausualLeaves"
            className="form-control"
            name="CausualLeaves"
            type="text"
          />
        </div>

        <div className="form-group col-md-6 ">
          <label htmlFor="SickLeaves">SickLeaves</label>
          <input
            key="7"
            id="SickLeaves"
            className="form-control"
            name="SickLeaves"
            type="text"
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="PublicHolidays">PublicHolidays</label>
          <input
            key="8"
            id="PublicHolidays"
            className="form-control"
            name="PublicHolidays"
            type="text"
          />
        </div>
        <button>Edit</button>
      </form>
    );
  }
}
export default EditEmployee;
