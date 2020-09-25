import React, { Component } from "react";
import Axios from "../../utils/axios";

import { Table } from "antd";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: "", img: "", data: [] };
  }

  componentDidMount() {
    Axios.get("/users")
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state);
    const { data } = this.state;
    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Email", dataIndex: "email", key: "email" },
      { title: "Address", dataIndex: "address", key: "address" },
      {
        title: "Action",
        dataIndex: "",
        key: "x",
        render: (record) => (
          <a
            onClick={() =>
              Axios.get("/users/" + record._id + "/delete")
                .then((res) => {
                  console.log(res.data);
                  this.props.history.push(`/users`);
                })
                .catch((err) => console.log(err))
            }
          >
            Delete
          </a>
        ),
      },
    ];

    return (
      <div>
        <h2>Foydalanuvchilar ro'yxati</h2>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Users;
