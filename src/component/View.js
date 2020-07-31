import React from "react";
import axios from "axios";
import UserRows from "./UserRows";
export default class view extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost/ReactCrud/list.php").then((res) => {
      this.setState({ users: res.data });
    });
  }

  tableusers() {
    return this.state.users.map(function (user, i) {
      return <UserRows user={user} key={i} />;
    });
  }

  render() {
    return (
      <center>
        <h2>List Of Users</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Middlename</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.tableusers()}</tbody>
        </table>
      </center>
    );
  }
}
