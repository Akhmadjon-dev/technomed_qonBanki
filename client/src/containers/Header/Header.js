import React, { PureComponent } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { signOutAction } from "../../store/Auth/actions";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlinePoweroff,
  AiTwotoneBoxPlot,
  AiFillUpCircle,
  AiTwotoneUpCircle,
} from "react-icons/ai";
import { Header, NavList, Brand, Button } from "../../styles";

import language from "../../lang/header";
import GlobalContext from "../../context/GlobalContext";

class HeaderComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static contextType = GlobalContext;

  signOutHandler = async () => {
    await this.props.signOutAction();
    this.props.history.push("/sign-in");
  };

  render() {
    const { lang = "en", userType = "seller" } = this.context;
    const { isAdmin } = this.props;
    const trans = language[lang];

    const URLS = [
      {
        url: "/",
        exact: true,
        title: "Dashboard",
        icon: <AiOutlineHome />,
      },
      {
        url: "/bloods",
        exact: true,
        title: "Qonlar",
        icon: <AiTwotoneBoxPlot />,
      },
      {
        url: "/applications",
        exact: true,
        title: "Talabnomalar",
        icon: <AiTwotoneUpCircle />,
      },
      {
        url: "/users",
        exact: true,
        title: "Foydalanuvchilar",
        icon: <AiOutlineUser />,
      },
    ];
    return (
      <Header>
        <nav>
          <Brand>
            <Link to="/" id="logo"></Link>
          </Brand>
          <ul style={{ padding: 0 }}>
            {URLS.map((item) => (
              <NavList key={item.url}>
                <NavLink
                  to={item.url}
                  exact={item.exact}
                  activeClassName="active"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </NavList>
            ))}

            <NavList className="text-center">
              <Button
                className="btn-sm active"
                status="danger"
                style={{ minWidth: "50px" }}
                onClick={this.signOutHandler}
              >
                <AiOutlinePoweroff />
                <span>Sign Out</span>
              </Button>
            </NavList>

            <small className="text-center" id="brand">
              {" "}
              {/* <span>produced by</span> */}
              <a href="https://alitech.uz">Ahmadjon Abdusamadov</a>
            </small>
          </ul>
        </nav>
      </Header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signOutAction }, dispatch);
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(HeaderComponent);
