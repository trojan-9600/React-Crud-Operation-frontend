import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class Incomerows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      id: this.props.user.id,
      Fname: this.props.user.Fname,
      Mname: this.props.user.Mname,
      Lname: this.props.user.Lname,
      email: this.props.user.email,
    };
  }
  Update = () => {
    const obj = {
      id: this.state.id,
      Fname: this.state.Fname,
      Mname: this.state.Mname,
      Lname: this.state.Lname,
      email: this.state.email,
    };
    axios
      .post("http://localhost/ReactCrud/update.php", obj)
      .then(window.location.reload())
      .catch((err) => console.log(err));
  };

  delete = () => {
    axios
      .get("http://localhost/ReactCrud/delete.php?id=" + this.props.user.id)
      .then(window.location.reload())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <tr>
        <td>
          <input
            value={this.state.Fname}
            className="form-control"
            onChange={(e) => {
              this.setState({ Fname: e.target.value });
            }}
          />
        </td>
        <td>
          <input
            value={this.state.Mname}
            className="form-control"
            onChange={(e) => {
              this.setState({ Mname: e.target.value });
            }}
          />
        </td>
        <td>
          <input
            value={this.state.Lname}
            className="form-control"
            onChange={(e) => {
              this.setState({ Lname: e.target.value });
            }}
          />
        </td>
        <td>
          <input
            type="email"
            value={this.state.email}
            className="form-control"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
        </td>
        <td>
          <button className="btn btn-primary" onClick={this.Update}>
            Update
          </button>{" "}
          <button className="btn btn-danger" onClick={this.delete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
