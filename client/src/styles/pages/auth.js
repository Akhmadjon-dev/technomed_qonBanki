import styled from "styled-components";
import bgImg from "../../assets/img/lab.jpg";

export const StyledSignIn = styled.div`
  &::after {
    content: "";
    min-height: 100vh;
    width: 100vw;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${bgImg}) no-repeat bottom right;
    /* filter: blur(4px); */
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  min-height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    color: #000;
    font-weight: 600;
  }
  .title,
  .alternative-link {
    text-align: center;
  }
  .col-left {
    padding: 20px;
    height: 100%;
    color: #000;
    max-width: 400px;
    width: 100%;
    background-color: rgb(255 255 255 / 80%);
    box-shadow: var(--box-shadow);
    border-radius: 5px;

    label {
      color: var(--purpule);
    }
  }
  .col-right {
    background: url(${bgImg}) no-repeat center right;
    background-size: cover;
    min-width: 100vw;
  }
`;
