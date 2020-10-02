// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import {
//   AiOutlineUser,
//   AiOutlineMail,
//   AiOutlineLock,
//   AiOutlinePhone,
//   AiOutlineEnvironment,
// } from "react-icons/ai";
// import { FlexWrapper } from "../../styles";
// import { Message, Loader } from "../../components/UI";

// import { signUp } from "../../store/actions/auth";

// class SignUp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       address: "",
//       email: "",
//       msg: null,
//       name: "",
//       password: "",
//       phone: "",
//       success: true,
//       type: "user",
//     };
//   }

//   inputHandler = (e) => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   formHandler = async (e) => {
//     e.preventDefault();
//     const { name, email, password, phone } = this.state;

//     if (name && email && password && phone) {
//       await this.props.signUp(this.state);
//       const { error, msg } = this.props.auth;
//       if (error) {
//         this.setState({ msg });
//       } else {
//         this.props.history.push("/");
//       }
//     } else {
//       this.setState({ msg: "Fill required fileds*" });
//     }
//   };

//   render() {
//     const { pending } = this.props.auth;
//     const { msg } = this.state;
//     return (
//       <div id="sign-up">
//         {pending && <Loader />}
//         <Message msg={msg} />
//         <FlexWrapper>
//           <div>
//             <h2>Sign Up</h2>
//             <form action="" onSubmit={this.formHandler}>
//               <div>
//                 <select name="type" onChange={this.inputHandler}>
//                   <option value="user">User</option>
//                   <option value="admin">Admin</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="Name">Name*</label>
//                 <input type="text" name="name" onChange={this.inputHandler} />
//                 <AiOutlineUser className="icon" />
//               </div>
//               <div>
//                 <label htmlFor="Email">Email*</label>
//                 <input type="email" name="email" onChange={this.inputHandler} />
//                 <AiOutlineMail className="icon" />
//               </div>
//               <div>
//                 <label htmlFor="Password">Password*</label>
//                 <input
//                   type="password"
//                   name="password"
//                   onChange={this.inputHandler}
//                 />
//                 <AiOutlineLock className="icon" />
//               </div>
//               <div>
//                 <label htmlFor="Phone">Phone*</label>
//                 <input type="phone" name="phone" onChange={this.inputHandler} />
//                 <AiOutlinePhone className="icon" />
//               </div>
//               <div>
//                 <label htmlFor="Address">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   onChange={this.inputHandler}
//                 />
//                 <AiOutlineEnvironment className="icon" />
//               </div>
//               <div>
//                 <button>Sign Up</button>
//                 <Link to="/sign-in">Sign In</Link>
//               </div>
//             </form>
//           </div>
//         </FlexWrapper>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { auth: state.auth };
// };
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ signUp }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlinePhone,
} from "react-icons/ai";
import { signUpSuccess } from "../../store/Auth/actions";
import { message } from "antd";
import Axios from "../../utils/axios";

import { StyledInputWrapper, StyledInput } from "../../styles/inputs";
import { Button } from "../../styles/buttons";
import { StyledSignIn } from "../../styles/pages";

function SignUp(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = useCallback(
    async (e) => {
      e.preventDefault();
      if (name && email && password && phone) {
        return Axios.post("/auth/sign-up", {
          email,
          password,
          password,
          phone,
          name,
        })
          .then(async (res) => {
            const { data } = res;
            await props.signUpSuccess(data.payload);
            props.history.push("/");
          })
          .catch((err) => {
            const { msg } = err.response.data;
            message.error(msg, 5);
          });
      } else {
        message.error("Fill required fileds * ");
      }
    },
    [email, password, name, phone]
  );
  console.log(email);
  return (
    <StyledSignIn id="sign-in">
      <div md={8} className="col-left p-30">
        <h2 className="title">Sign Up</h2>
        <form action="" onSubmit={formHandler}>
          <StyledInputWrapper justify="flex-start">
            <label htmlFor="Name">Name</label>
            <div className="input-container">
              <StyledInput
                type="text"
                name="name"
                value={name}
                placeholder="Full name"
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <AiOutlineUser className="input-icon" />
            </div>
          </StyledInputWrapper>
          <StyledInputWrapper justify="flex-start">
            <label htmlFor="Phone">Phone</label>
            <div className="input-container">
              <StyledInput
                type="phone"
                name="phone"
                value={phone}
                placeholder="Phone"
                onChange={(e) => setPhone(e.currentTarget.value)}
              />
              <AiOutlinePhone className="input-icon" />
            </div>
          </StyledInputWrapper>
          <StyledInputWrapper justify="flex-start">
            <label htmlFor="Email">Email</label>
            <div className="input-container">
              <StyledInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <AiOutlineMail className="input-icon" />
            </div>
          </StyledInputWrapper>
          <StyledInputWrapper justify="flex-start">
            <label htmlFor="Password">Password</label>
            <div className="input-container">
              <StyledInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <AiOutlineLock className="input-icon" />
            </div>
          </StyledInputWrapper>
          <StyledInputWrapper justify="flex-start">
            <Button status="primary" width="100%">
              Sign Up
            </Button>
          </StyledInputWrapper>
        </form>
        <p className="alternative-link">
          Do you have an account ? <Link to="/sign-in">Signin now</Link>
        </p>
      </div>
    </StyledSignIn>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signUpSuccess }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
