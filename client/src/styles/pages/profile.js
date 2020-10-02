import styled from "styled-components";
import bgImg from "../../assets/auth/truck.jpg";

const Profile = styled.div`
  position: relative;
  header {
    position: absolute;
    left: -15px;
    top: -15px;
    width: calc(100% + 30px);
    height: 200px;
    background: url(${bgImg}) center no-repeat;
    background-size: cover;
    /* background-repeat: repeat-x; */
  }
  .page-title {
    text-align: center;
  }
  .sub-title {
    text-align: center;
    margin-bottom: 0;
  }
  .profile-wrapper {
    display: flex;
    justify-content: space-between;
    position: ${(props) => props.position || "relative"};
    top: 60px;
    padding: 40px;
    z-index: 2;
  }
  .profile-header {
    width: 220px;
    background-color: #fff;
    padding: 15px;
    text-align: center;
  }
  .profile-content {
    width: calc(100% - 240px);
    background-color: #fff;
  }
  .profile-content-header {
    height: 70px;
    border-bottom: 1px solid var(--grey);
    display: flex;
    align-items: stretch;
    padding-left: 30px;
  }
  .profile-content-header a {
    height: 70px;
    line-height: 70px;
    margin-right: 20px;
    transition: ease-out;
  }
  .profile-content-footer {
    height: 70px;
    border-top: 1px solid var(--grey);
    padding-left: 30px;
    display: flex;
    align-items: center;
  }
  .profile-content-form {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .form-controle {
    display: flex;
    flex-direction: column;
    width: calc(50% - 10px);
    margin-bottom: 14px;
  }
  .form-controle label {
    margin-bottom: 5px;
  }
  .form-controle input,
  .form-controle select {
    height: 35px;
    padding: 3px 10px;
    border-radius: 4px;
    border: 1px solid var(--grey);
  }
  .form-controle input:focus {
    border: 1px solid var(--main-dark);
    box-shadow: 0px 0px 7px var(--main-light);
  }
  .profile-content-header a.active,
  .profile-content-header a:hover {
    border-bottom: 2px solid var(--main-dark);
    transition: ease-in;
    font-weight: 700;
    color: var(--main-dark);
  }
  .profile-header img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid var(--main-dark);
    padding: 2px;
  }
  .profile-header .img-container {
    width: 100px;
    margin: auto;
    position: relative;
  }
  .file-upload-btn {
    &:focus {
      border: none;
      outline: none;
    }
    cursor: pointer;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    margin: 1rem 0;
    vertical-align: middle;
  }
  #webCam-upload-btn {
    position: absolute;
    right: 3px;
    bottom: 8px;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    background: var(--orange);
    color: #fff;
    border: 2px solid;
  }
  .profile-header-content {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid;
  }
  .profile-header-content h4 {
    margin-top: 0;
    margin-bottom: -1px;
  }
  @media screen and (max-width: 990px) {
    .form-controle {
      width: calc(100% - 10px);
    }
  }
  @media screen and (max-width: 768px) {
    header {
      background-size: cover;
    }
    .profile-wrapper {
      flex-direction: column;
      top: 0;
      padding: ${(props) => props.padding || "70px 0px"};
    }
    .profile-header {
      width: 100%;
      margin-bottom: 30px;
    }
    .profile-content {
      width: 100%;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 500px) {
    .profile-wrapper {
      flex-direction: column;
      top: 0;
    }
  }
`;

export default Profile;
