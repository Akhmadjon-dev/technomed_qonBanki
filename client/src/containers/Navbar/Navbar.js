import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineBell } from "react-icons/ai";
import { SearchInput, Nav, FlexWrapper } from "../../styles";
import defaultImg from "../../assets/img/profile.jpg";

const Navbar = (props) => {
  const { img, name, type } = props;

  return (
    <Nav>
      <Link
        to="/"
        className="links"
        display="inline-block"
        style={{ marginLeft: "auto" }}
      >
        <AiOutlineBell size="20" />
      </Link>
      <Link to="/profile" className="profile-img" display="inline-block">
        <FlexWrapper fd="column" align="flex-end">
          <small>{name || "User"}</small>
          <small>{type || "Admin"}</small>
        </FlexWrapper>

        <img
          src={img || defaultImg}
          onError={(e) => (e.target.src = defaultImg)}
          alt="Profile"
        />
      </Link>
    </Nav>
  );
};

export default Navbar;
