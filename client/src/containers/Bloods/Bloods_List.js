import React, { Component } from "react";
import Axios from "../../utils/axios";

import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Дата пост",
    dataIndex: "dateCome",
    key: "dateCome",
    width: 100,
    fixed: "left",
    // filters: [
    //   {
    //     text: "Joe",
    //     value: "Joe",
    //   },
    //   {
    //     text: "John",
    //     value: "John",
    //   },
    // ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: "№ гемакона",
    dataIndex: "gemakone",
    key: "gemakone",
    width: 100,
    fixed: "left",
  },
  {
    title: "Ф.И.О. донора",
    dataIndex: "donorName",
    key: "donorName",
    width: 100,
    fixed: "left",
  },
  {
    title: "Группа крови донора",
    dataIndex: "donorBloodGroup",
    key: "donorBloodGroup",
    width: 100,
    fixed: "left",
  },
  {
    title: "Rh-фактор крови донора",
    dataIndex: "resusFaktor",
    key: "resusFaktor",
    width: 100,
    fixed: "left",
  },
  {
    title:
      "Наименование и кол-во компонентов (препарата) крови и в гемоконтейнере.л",
    children: [
      {
        title: "Эр.М",
        dataIndex: "erMassa",
        key: "erMassa",
        width: 100,
        sorter: (a, b) => a.erMassa - b.erMassa,
      },
      {
        title: "СЗП",
        dataIndex: "szp",
        key: "szp",
        width: 100,
        sorter: (a, b) => a.szp - b.szp,
      },
      {
        title: "обл.эр.м",
        dataIndex: "oblErM",
        key: "oblErM",
        width: 100,
        sorter: (a, b) => a.oblErM - b.oblErM,
      },
      {
        title: "Отм.Эр",
        dataIndex: "otmEr",
        key: "otmEr",
        width: 100,
        sorter: (a, b) => a.otmEr - b.otmEr,
      },
      {
        title: "Разм эр.м",
        dataIndex: "azmEr",
        key: "azmEr",
        width: 100,
        sorter: (a, b) => a.azmEr - b.azmEr,
      },

      {
        title: "ТК",
        dataIndex: "tk",
        key: "tk",
        width: 100,
        sorter: (a, b) => a.tk - b.tk,
      },
      {
        title: "альб 10%",
        dataIndex: "abl10",
        key: "abl10",
        width: 100,
        sorter: (a, b) => a.abl10 - b.abl10,
      },
      {
        title: "альб20%",
        dataIndex: "abl20",
        key: "abl20",
        width: 100,
        sorter: (a, b) => a.abl20 - b.abl20,
      },
      {
        title: "Крио",
        dataIndex: "krio",
        key: "krio",
        width: 100,
        sorter: (a, b) => a.krio - b.krio,
      },
      {
        title: "с/с",
        dataIndex: "cc",
        key: "cc",
        width: 100,
        sorter: (a, b) => a.cc - b.cc,
      },
      {
        title: "а/с",
        dataIndex: "ac",
        key: "ac",
        width: 100,
        sorter: (a, b) => a.ac - b.ac,
      },
      {
        title: "Дата заготовки компонента (препарата) крови",
        dataIndex: "dateTake",
        key: "dateTake",
        width: 100,
        sorter: (a, b) => a.dateTake - b.dateTake,
      },
      {
        title: "Куда выдана",
        dataIndex: "dateGo",
        key: "dateGo",
        width: 100,
        sorter: (a, b) => a.dateGo - b.dateGo,
      },
      {
        title: "Наименование ЛПУ отд-ия",
        dataIndex: "lpu",
        key: "lpu",
        width: 100,
        sorter: (a, b) => a.lpu - b.lpu,
      },
    ],
  },

  {
    title: "Ф.И.О. врача перелившего компонента (препарата) крови.",
    dataIndex: "vrach",
    key: "vrach",
    width: 120,
    fixed: "right",
  },
];

class Bloods_List extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: 222, img: "", data: [] };
  }
  async componentDidMount() {
    // const { _id } = this.props.match.params;
    const res = await Axios.get(`/bloods`);
    if (res.data) {
      this.setState({ data: res.data });
    }
  }
  // componentDidMount(){
  //   Axios.get("/bloods")
  //     .then((res) => this.setState({data: res})
  //     .catch((err) => console.log(err))
  // };

  render() {
    console.log(this.state);
    const { data } = this.state;
    return (
      <div>
        <h2>Qonlar ro'yxati</h2>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          size="middle"
          scroll={{ x: "calc(700px + 50%)", y: 240 }}
        />
      </div>
    );
  }
}

export default Bloods_List;
