// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
// import signInAction from "../../store/actions/auth/signInActions";

// import { FlexWrapper } from "../../styles";
// import { Message, Loader } from "../../components/UI";

// class SignIn extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       type: "user",
//       msg: null,
//       success: true,
//     };
//   }

//   inputHandler = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   formHandler = async (e) => {
//     e.preventDefault();
//     const { email, password } = this.state;
//     if (email && password) {
//       await this.props.signInAction(this.state);
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
//     const { msg } = this.state;
//     const { pending } = this.props.auth;
//     console.log(this.state);

//     return (
//       <div id="sign-in">
//         {pending && <Loader />}
//         <Message msg={msg} />
//         <FlexWrapper>
//           <div>
//             <h2>Sign In</h2>
//             <form action="" onSubmit={this.formHandler}>
//               <div>
//                 <select name="type" onChange={this.inputHandler}>
//                   <option value="user">User</option>
//                   <option value="admin">Admin</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="Email">Email</label>
//                 <input type="email" name="email" onChange={this.inputHandler} />
//                 <AiOutlineMail className="icon" />
//               </div>
//               <div>
//                 <label htmlFor="Password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   onChange={this.inputHandler}
//                 />
//                 <AiOutlineLock className="icon" />
//               </div>
//               <div>
//                 <button>Sign In</button>
//                 <Link to="/sign-up">Sign Up</Link>
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
//   return bindActionCreators({ signInAction }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { signInSuccess, signInError } from "../../store/Auth/actions";
import { message } from "antd";
import Axios from "../../utils/axios";

import { StyledInputWrapper, StyledInput } from "../../styles/inputs";
import { Button } from "../../styles/buttons";
import { StyledSignIn } from "../../styles/pages";

function SignIn(props) {
  const [email, setEmail] = useState("admin@mail.ru");
  const [password, setPassword] = useState("1");

  const formHandler = useCallback(
    async (e) => {
      e.preventDefault();
      if (email && password) {
        return Axios.post("/auth/sign-in", { email, password })
          .then(async (res) => {
            const { data } = res;
            if (data.payload) {
              await props.signInSuccess(data.payload);
              props.history.push("/");
            } else {
              await props.signInError(data.payload);
              const { msg } = data;
              message.error(msg, 5);
            }
            console.log(data);
            props.history.push("/");
          })
          .catch((err) => {
            console.log(err);
            const { msg } = err;
            message.error(msg, 5);
          });
      } else {
        message.error("Fill required fields * ");
      }
    },
    [email, password]
  );

  return (
    <StyledSignIn id="sign-in">
      <div className="col-left p-30">
        <h2 className="title">Sign In</h2>
        <form action="" onSubmit={formHandler} autoComplete="off">
          <input type="email" hidden />
          <input type="email" hidden />
          <input type="email" hidden />
          <StyledInputWrapper justify="flex-start">
            <label htmlFor="Email">Email</label>
            <div className="input-container">
              <StyledInput
                type="email"
                name="email"
                autoComplete="new-email"
                id="email"
                value={email}
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
                id="password"
                autoComplete="new-password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <AiOutlineLock className="input-icon" />
            </div>
          </StyledInputWrapper>
          <StyledInputWrapper justify="flex-start">
            <Button status="primary" width="100%">
              Sign In
            </Button>
          </StyledInputWrapper>
        </form>
        <p className="alternative-link">
          Don't have an account ? <Link to="/sign-up">Signup now</Link>
        </p>
      </div>
    </StyledSignIn>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signInSuccess, signInError }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
