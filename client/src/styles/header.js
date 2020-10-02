import styled from "styled-components";
import cornerTop from "../assets/header/corner-top.svg";
import cornerBottom from "../assets/header/corner-bottom.svg";

const Header = styled.header`
  width: 200px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: var(--redish);
  color: var(--white);
  box-shadow: var(--box-shadow);
  z-index: 1050;
  overflow-y: auto;
  scroll-behavior: smooth;

  #brand {
    font-size: 10px;
    padding: 10px 0;
  }
  #brand a {
    color: var(--blue);
  }
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to bottom,
      transparent 60px,
      #00be4c 61px,
      #00be4c 90px,
      transparent 10px
    );
    border-radius: 10px;
  }

  ul {
    padding: 0px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 100px);
  }
  @media (max-width: 1024px) {
    & {
      width: 70px;
      box-shadow: none;
      overflow-x: hidden;
    }
    #brand span {
      display: none;
    }
  }
`;

const Brand = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  background: var(--redish);
  text-align: center;
  line-height: 60px;
  text-decoration: none;
  font-weight: 700;
  #logo {
    display: block;
    height: 100%;
    width: 90%;
    padding: 5px 0;
    margin: auto;
    max-width: 120px;
  }
  #logo-short {
    display: none;
  }
  @media (max-width: 1024px) {
    & {
      background: var(--white);
    }
    #logo-extend {
      display: none;
    }
    #logo-short {
      display: block;
      width: 40px;
      height: 40px;
      margin: 5px auto;
    }
  }
`;

const NavList = styled.li`
  margin: 3px 0;
  margin-left: 25px;
  list-style: none;
  a {
    position: relative;
    display: block;
    padding: 8px 20px;
    color: var(--white);
    text-decoration: none;
    transition: 0.3s;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;

    &.active,
    &:hover {
      background-color: #fff;
      transition: 0.5s;
      color: var(--dark);

      svg {
        fill: var(--dark);
      }
    }
    &.active:before {
      content: "";
      width: 15px;
      height: 15px;
      position: absolute;
      top: -10px;
      transform: rotate(24deg);
      right: -5px;
      background-size: cover;
      z-index: 0;
      background: url(${cornerTop}) no-repeat center right;
    }
    &.active:after {
      content: "";
      width: 15px;
      height: 15px;
      position: absolute;
      bottom: -10px;
      transform: rotate(-21deg);
      right: -5px;
      background-size: cover;
      z-index: 0;
      background: url(${cornerBottom}) no-repeat center right;
    }
  }
  .exit-btn {
    margin-right: 25px;
    width: auto;
    border: 1px solid #fff;

    &:hover {
      background: #fff;
      color: #000;
    }
  }
  svg {
    margin-right: 7px;
    vertical-align: middle;
    height: 24px;
  }
  &:last-of-type {
    margin-top: auto;
  }
  &:last-of-type a {
    color: var(--danger);
  }
  @media (max-width: 1024px) {
    & {
      padding-left: 0;
      margin: 3px 10px;
      text-align: center;
      span {
        display: none;
      }
      a {
        padding: 10px;
        font-size: 20px;
      }
      a.active,
      a:hover {
        border-radius: 10px;
        padding: 10px;
      }
      svg {
        margin-right: 0;
      }
    }
    & a.active:after,
    & a.active:before {
      display: none;
    }
    &:last-of-type svg {
      margin-right: 0;
    }
  }
`;

const Nav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 225px;
  padding-right: 30px;
  background: #fff;
  color: var(--main);
  border-bottom: 1px solid var(--grey);
  line-height: 60px;
  z-index: 100;
  box-shadow: var(--box-shadow);
  .links {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 30px;
    margin: 0 3px;
    padding: 3px 2px;
    text-decoration: none;
    color: var(--main);
  }
  .links svg {
    stroke: var(--success);
  }

  .profile-img {
    display: flex;
    margin-left: 5px;
    align-items: center;
    text-decoration: none;
    color: var(--main);
  }
  .profile-img img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    box-shadow: var(--box-shadow);
    padding: 2px;
    margin-left: 3px;
  }

  select {
    -webkit-appearance: none;
    text-align: center;
    padding: 3px 8px;
    border: none;
    background: none;
    outline: none;
    font-size: 14px;
    color: var(--main);
  }

  small {
    line-height: 1;
  }
  @media (max-width: 991px) {
    & {
      padding-left: 105px;
    }
  }
`;

const Input = styled.input`
  width: ${(props) => props.width || "100%"};
  height: 35px;
  display: inline-block;
  padding: 7px 10px 7px 20px;
  font-size: 16px;
  border-radius: 20px;
  border: 1px solid var(--grey);
  background-color: var(--bg-light);
  outline: none;
  &:focus {
    border: 1px solid var(--redish);
    background-color: var(--white);
  }

  @media (max-width: 550px) {
    & {
      display: none;
    }
  }
`;

export { Header, Brand, NavList, Nav, Input };
