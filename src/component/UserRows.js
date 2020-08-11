import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class Incomerows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      id: this.props.user._id,
      Fname: this.props.user.FirstName,
      Mname: this.props.user.MiddleName,
      Lname: this.props.user.LastName,
      email: this.props.user.Email,
      date: this.props.user.date,
      bio: this.props.user.bio,
    };
  }
  Update = () => {
    const newRecord = {
      Fname: this.state.Fname,
      Mname: this.state.Mname,
      Lname: this.state.Lname,
      email: this.state.email,
      date: this.state.date,
      bio: this.state.bio,
    };
    axios
      .put(
        "http://localhost:9000/postMessages/" + this.props.user._id,
        newRecord
      )
      .then(window.location.reload())
      .catch((err) => console.log(err));
  };

  delete = () => {
    axios
      .delete("http://localhost:9000/postMessages/" + this.props.user._id)
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
          <input
            type="date"
            value={this.state.date}
            className="form-control"
            onChange={(e) => {
              this.setState({ date: e.target.value });
            }}
          />
        </td>
        <td>
          <input
            type="text"
            value={this.state.bio}
            className="form-control"
            onChange={(e) => {
              this.setState({ bio: e.target.value });
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
