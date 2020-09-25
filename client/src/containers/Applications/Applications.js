import React, { Component } from "react";
import Axios from "../../utils/axios";

import { Table } from "antd";

class Applications extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: "", img: "", data: [] };
  }

  componentDidMount() {
    Axios.get("/applications")
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state);
    const { data } = this.state;
    const columns = [
      { title: "Id", dataIndex: "id", key: "id" },
      { title: "Vrach", dataIndex: "vrach", key: "name" },
      { title: "Bo'lim boshlig'i", dataIndex: "leaderSection", key: "email" },
      { title: "Status", dataIndex: "status", key: "status" },
      {
        title: "Action",
        dataIndex: "",
        key: "x",
        render: (record) => (
          <a
            onClick={() =>
              Axios.get("/applications/" + record._id + "/delete")
                .then((res) => {
                  console.log(res.data);
                  this.props.history.push(`/applications`);
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
        <h2>Talabnomalar ro'yxati</h2>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Applications;
