import React, { Component } from "react";
import Axios from "../../utils/axios";
import { Table } from "antd";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

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
    // appPersons: (2) [{…}, {…}]
    // createdAt: 1600934294538
    // id: "N012"
    // leaderSection: "Toshpo'latov"
    // status: "pending"
    // updatedAt: 1600934294538
    // vrach: "Sodiqo
    return (
      <div>
        <h2>Talabnomalar ro'yxati</h2>
        <Table columns={columns} dataSource={data} />
        <ExcelFile element={<button>Download Applications</button>}>
          <ExcelSheet data={data} name="Applications">
            <ExcelColumn label="id" value="id" />
            <ExcelColumn label="Vrach" value="vrach" />
            <ExcelColumn label="leaderSection" value="leaderSection" />
            <ExcelColumn label="UpdatedAt" value="updatedAt" />
            <ExcelColumn
              label="appPersons"
              value={(col) =>
                col.appPersons &&
                col.appPersons.map((item) => (
                  <>
                    <ExcelColumn
                      label="Application person"
                      value={item.name}
                      key={item.name}
                    />
                    {/* <ExcelColumn
                      label="Application person"
                      value={item.diagnos}
                      key={item.diagnos}
                    /> */}
                  </>
                ))
              }
            />
          </ExcelSheet>
        </ExcelFile>
      </div>
    );
  }
}

export default Applications;
