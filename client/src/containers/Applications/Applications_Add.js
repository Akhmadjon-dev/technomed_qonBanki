import React, { Component } from "react";
import Axios from "../../utils/axios";
import { StyledInputWrapper, StyledInput } from "../../styles/inputs";
import { StyledAppAdd } from "../../styles/pages/app";
import { AiFillFileText, AiOutlineUser } from "react-icons/ai";
import { Button } from "../../styles/buttons";

class Applications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      varch: "",
      status: "",
      leaderSection: "",
      id: "",
      persons: [],
      person: {
        history: null,
        diagnos:'',
        yubQon: null,
        qonTarkibi: '',
        name:'',
        donorBloodGroup:"",
        resusFaktor:"",
        erMassa:null,
        szp:null,
        alb10:null,
        alb20: null,
        krio:null,
        cc:null,
        ac: null,
      }
    };
  }
    

  // componentDidMount() {
  //   Axios.get("/applications")
  //     .then((res) => this.setState({ data: res.data }))
  //     .catch((err) => console.log(err));
  // }
  formHandler = (e) => {
    e.preventDefault();
    console.log("form");
  };

  handleSelect = (e, name) => {
    const { value } = e.target;
    this.setState({ [name]: value });
  };
  handleInput = (e) => {
    const { name, value } = e.target;
    if (name.includes("Date")) {
      const val = new Date(value).getTime();
      return this.setState({ [name]: val });
    }
    this.setState({ [name]: value });
    console.log(this.state);
  };
  render() {
    console.log(this.state);
    const { status, vrach, leaderSection, id } = this.state;
    const {name, donorBloodGroup, resusFaktor, qonTarkibi, history, yubQon, erMassa, szp, alb10, alb20, krio, cc, ac, diagnos}= this.state.person
    return (
      <StyledAppAdd>
        <div className="top-app">
          <h2>Talabnomalar qo'shish</h2>
        </div>
        <form action="" onSubmit={this.formHandler}>
          <div className="form__box">
            <div className="left__form">
              <StyledInputWrapper justify="center">
                <label htmlFor="Id">Id</label>
                <div className="input-container">
                  <StyledInput
                    type="number"
                    name="id"
                    value={id}
                    placeholder="ID ni kiritin"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
                <label htmlFor="Vrach">Vrach</label>
                <div className="input-container">
                  <StyledInput
                    type="text"
                    name="vrach"
                    value={vrach}
                    placeholder="Full name vrach"
                    onChange={this.handleInput}
                  />
                  <AiOutlineUser className="input-icon" />
                </div>
              </StyledInputWrapper>
              
            </div>
            <div className="right__form">
           <StyledInputWrapper justify="center">
              <label htmlFor="Status">Status</label>
              <div className="input-container">
                <select name="status" onChange={this.handleInput} value={status}>
                    <option value="">Status</option>
                    <option value="pending">Pending</option>
                    <option value="canceled">Canceled</option>
                    <option value="received">Received</option>
                  </select>
                <AiFillFileText className="input-icon" />
              </div>
            </StyledInputWrapper>
            <StyledInputWrapper justify="center">
                <label htmlFor="leaderSection">Bo'lim boshlig'i</label>
                <div className="input-container">
                  <StyledInput
                    type="text"
                    name="leaderSection"
                    value={leaderSection}
                    placeholder="Bo'lim boshlig'i"
                    onChange={this.handleInput}
                  />
                  <AiOutlineUser className="input-icon" />
                </div>
              </StyledInputWrapper>
              
          </div>
          </div>
          <h2>Donor qo'shish</h2>
          <div className="persons__form" style={{display: "flex", justifyContent:"space-around", width:"100%"}}>
            <div>
              <StyledInputWrapper justify="center">
                <label htmlFor="Name">Name</label>
                <div className="input-container">
                  <StyledInput
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name ni kiriting"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
                <label htmlFor="donorBloodGroup">Donor qon guruxini kiriting</label>
                <div className="input-container">
                  <StyledInput
                    type="text"
                    name="donorBloodGroup"
                    value={donorBloodGroup}
                    placeholder="Donor qon guruxini kiriting"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
                <label htmlFor="resusFaktor">Donor qon resus faktorini kiriting</label>
                <div className="input-container">
                  <StyledInput
                    type="text"
                    name="resusFaktor"
                    value={resusFaktor}
                    placeholder="Donor qon resusu faktorini kiriting"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
                <label htmlFor="qonTarkibi">Donor qon tarkkibini kiriting</label>
                <div className="input-container">
                  <StyledInput
                    type="text"
                    name="qonTarkibi"
                    value={qonTarkibi}
                    placeholder="Donor qon tarkibini kiriting"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
                <label htmlFor="history">Donor tarixini kiriting</label>
                <div className="input-container">
                  <StyledInput
                    type="number"
                    name="history"
                    value={history}
                    placeholder="Donor tarixini kiriting"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
                <label htmlFor="yubQon">Donor yub qon ni kiriting</label>
                <div className="input-container">
                  <StyledInput
                    type="number"
                    name="yubQon"
                    value={yubQon}
                    placeholder="Donor yub qon ni kiriting"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
              <label htmlFor="erMassa">Er massa ni kiriting</label>
              <div className="input-container">
                <StyledInput
                  type="number"
                  name="erMassa"
                  value={erMassa}
                  placeholder="Er massa ni kiriting"
                  onChange={this.handleInput}
                />
                <AiFillFileText className="input-icon" />
              </div>
            </StyledInputWrapper>
            </div>            
            <div>              
              <StyledInputWrapper justify="center">
                <label htmlFor="szp">SZP ni kiriting</label>
                <div className="input-container">
                  <StyledInput
                    type="number"
                    name="szp"
                    value={szp}
                    placeholder="SZP ni kiriting"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
                <label htmlFor="alb10">alb10 ni kiriting</label>
                <div className="input-container">
                  <StyledInput
                    type="number"
                    name="alb10"
                    value={alb10}
                    placeholder="alb10 ni kiriting"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
                <label htmlFor="alb20">alb20 ni kiriting</label>
                <div className="input-container">
                  <StyledInput
                    type="number"
                    name="alb20"
                    value={alb20}
                    placeholder="alb20 ni kiriting"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
                <label htmlFor="krio">krio ni kiriting</label>
                <div className="input-container">
                  <StyledInput
                    type="number"
                    name="krio"
                    value={krio}
                    placeholder="krio ni kiriting"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
                <label htmlFor="cc">cc ni kiriting</label>
                <div className="input-container">
                  <StyledInput
                    type="number"
                    name="cc"
                    value={cc}
                    placeholder="cc ni kiriting"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
                <label htmlFor="ac">ac ni kiriting</label>
                <div className="input-container">
                  <StyledInput
                    type="number"
                    name="ac"
                    value={ac}
                    placeholder="ac ni kiriting"
                    onChange={this.handleInput}
                  />
                  <AiFillFileText className="input-icon" />
                </div>
              </StyledInputWrapper>
              <StyledInputWrapper justify="center">
              <label htmlFor="diagnos">Diagnos ni kiriting</label>
              <div className="input-container">
                <StyledInput
                  type="text"
                  name="diagnos"
                  value={diagnos}
                  placeholder="Diagnos ni kiriting"
                  onChange={this.handleInput}
                />
                <AiFillFileText className="input-icon" />
              </div>
            </StyledInputWrapper>
            </div>
          </div>
          <Button style={{width: "300px"}}  status="primary" >
            Add
          </Button>
        </form>
      </StyledAppAdd>
    );
  }
}

export default Applications;
