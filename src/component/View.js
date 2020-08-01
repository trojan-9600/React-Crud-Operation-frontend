import React from "react";
import axios from "axios";
import UserRows from "./UserRows";
export default class view extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      fil: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost/ReactCrud/list.php").then((res) => {
      this.setState({ users: res.data, fil: res.data });
    });
  }

  userList = (e) => {
    this.setState({
      fil: this.state.users.filter((user) =>
        user.Fname.includes(e.target.value)
      ),
    });
  };
  tableUser = () => {
    return this.state.fil.map(function (user, i) {
      return <UserRows user={user} key={i} />;
    });
  };
  render() {
    return (
      <center>
        <h2>List Of Users</h2>
        <input
          className="form-control"
          placeholder="Search.."
          onChange={this.userList}
        />

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Middlename</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>DATE</th>
              <th>BIO</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.tableUser()}</tbody>
        </table>
      </center>
    );
  }
}
