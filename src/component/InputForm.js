import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export default class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      MiddleName: "",
      LastName: "",
      email: "",
    };
  }
  OnSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: this.state.FirstName,
      middlename: this.state.MiddleName,
      lastname: this.state.LastName,
      email: this.state.email,
    };
    console.log(data);
    axios
      .post("http://localhost/ReactCrud/insert.php", data)
      .then((res) => console.log(res.data));
  };
  render() {
    return (
      <form className="inputform" onSubmit={this.OnSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label>FirstName</label>
          <input
            type="text"
            value={this.state.FirstName}
            className="form-control"
            onChange={(e) => {
              this.setState({ FirstName: e.target.value });
            }}
            placeholder="Enter FirstName"
            required
          />
        </div>
        <div className="form-group">
          <label>Middlename</label>
          <input
            type="text"
            value={this.state.MiddleName}
            className="form-control"
            onChange={(e) => {
              this.setState({ MiddleName: e.target.value });
            }}
            placeholder="Enter MiddleName"
            required
          />
        </div>
        <div className="form-group">
          <label>Lastname</label>
          <input
            type="text"
            value={this.state.LastName}
            className="form-control"
            onChange={(e) => {
              this.setState({ LastName: e.target.value });
            }}
            placeholder="Enter LastName"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            className="form-control"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
            placeholder="Enter email"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
