import styled from "styled-components";
// import Loads from "../containers/Loads/Loads";

export const StyledLoads = styled.section`
  width: 100%;
  padding: 20px;
  h2 {
    font-size: 34px;
    font-weight: 700;
  }
  .addLoadBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    border-radius: 32px !important;
    background-color: #ff5c4a;
    color: var(--white);

    &:hover {
      box-shadow: 0px 100px 80px rgba(255, 92, 74, 0.07),
        0px 41.7776px 33.4221px rgba(255, 92, 74, 0.0503198),
        0px 22.3363px 17.869px rgba(255, 92, 74, 0.0417275),
        0px 12.5216px 10.0172px rgba(255, 92, 74, 0.035),
        0px 6.6501px 5.32008px rgba(255, 92, 74, 0.0282725),
        0px 2.76726px 2.21381px rgba(255, 92, 74, 0.0196802);
    }
    svg path {
      fill: var(--white);
    }
    &:hover svg path {
      fill: var(--white);
    }
    &:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease-in-out;
    }
  }
  .newLoad {
    margin-bottom: 30px;
    height: 60px;
  }
`;

export const StyledLoadAdd = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0px 34px;
  padding-bottom: 15px;
  background-color: var(--bg-light);
  .loadTitle {
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 40px;
    padding-top: 35px;
    padding-left: 23px;
  }
  .loadAddBox {
    width: 100%;
    background: #ffffff;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    h5 {
      font-weight: normal;
      font-size: 20px;
      line-height: 20px;
    }
    .leftBox {
      padding: 35px;
      width: 40%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h5 {
        margin-bottom: 13px;
      }
      p {
        margin: 0;
        margin-top: 8px;
        padding-left: 21px;
        font-size: 16px;
      }
      input,
      select {
        margin: 2px 0px;
        height: 42px;
      }
      input[type="date"]::-webkit-datetime-edit {
        color: #c2c2e8;
      }
      input[type="time"]::-webkit-datetime-edit {
        color: #c2c2e8;
      }
      input::-webkit-calendar-picker-indicator {
        // filter: invert(0.5);
        opacity: 0.3;
      }

      .wrapper {
        overflow: hidden;
        position: relative;
        min-width: 200px;
        width: 100%;
        display: inline-block;
        border-radius: 20px;
        border: 1px solid var(--grey);
        background-color: var(--bg-light);
        cursor: pointer;
        margin: 0px;
        height: 40px;
        padding: 10px 20px;
        color: #c2c2e8;
        line-height: 1.75;
        &:focus {
          border: 1px solid var(--orange-dark);
        }
      }

      .wrapper > .browse {
        position: absolute;
        top: -16px;
        left: 1px;
        z-index: 2;
        cursor: pointer;
        opacity: 0; /* set to .5 or something so you can better position it as an overlay then back to zero again after you're done */
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
      }
      .selectdiv {
        margin-top: 15px;
        position: relative;
        /*Don't really need this just for demo styling*/

        // float: left;
        min-width: 200px;
        width: 100%;
        display: inline-block;
        padding: 0px 20px 0px 20px;
        font-size: 16px;
        border-radius: 20px;
        border: 1px solid var(--grey);
        background-color: var(--bg-light);
        cursor: pointer;
        &:focus {
          border: 1px solid var(--orange-dark);
        }
      }

      /* IE11 hide native button (thanks Matt!) */
      select::-ms-expand {
        display: none;
      }

      .selectdiv:after {
        content: ">";
        font: 17px "Consolas", monospace;
        color: #c2c2e8;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        right: 11px;
        top: 8px;
        padding: 0 0 2px;
        border-bottom: 1px solid #c2c2e8;
        position: absolute;
        pointer-events: none;
      }

      .selectdiv select {
        -webkit-appearance: none;
        -moz-appearance: none;
        cursor: pointer;
        appearance: none;
        /* Add some styling */
        background-color: transparent;
        display: block;
        width: 100%;
        margin: 5px 0px;
        font-size: 16px;
        line-height: 1.75;
        color: #333;
        background-image: none;
        border: none;
        -ms-word-break: normal;
        word-break: normal;
        height: 30px;
        &:focus,
        &:hover {
          appearance: none;
          outline: none;
        }
        option {
          text-transform: capitalize;
        }
      }
      .btnBox {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        button {
          width: 150px !important;
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 34px;
          background-color: var(--grey);
          .btnIcon:first-child {
            color: black;
            display: inline-block;
            margin-right: 8px;
          }
          .btnIcon:last-child {
            margin-left: 8px;
            color: black;
          }
          &:hover {
            border: 1px solid var(--orange-dark);
            background: linear-gradient(
              259.86deg,
              #ff8e34 -42.11%,
              #ff5c4a 85.54%
            );
            color: var(--white);
            box-shadow: 0px 100px 80px rgba(255, 92, 74, 0.07),
              0px 41.7776px 33.4221px rgba(255, 92, 74, 0.0503198),
              0px 22.3363px 17.869px rgba(255, 92, 74, 0.0417275),
              0px 12.5216px 10.0172px rgba(255, 92, 74, 0.035),
              0px 6.6501px 5.32008px rgba(255, 92, 74, 0.0282725),
              0px 2.76726px 2.21381px rgba(255, 92, 74, 0.0196802);
          }
          svg path {
            fill: var(--dark);
          }
          &:hover svg path {
            fill: var(--white);
          }
        }
      }
    }
    .rightBox {
      width: 60%;
      height: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export const LoadDetail = styled.section`
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
  }
  padding: 5px 0px 0px 25px;
  .block {
    margin-left: 30px;
    width: calc(100% - 30px);
    min-height: 100vh;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
      0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
      0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
      0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    .block__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      width: calc(100% - 100px);
      margin: 0px 20px;
      margin-right: 80px;
      border-bottom: 1px solid #f0f2ff;
      span {
        width: 20%;
        float: left;
        margin: 0px 10px;
        text-align: center;
      }
      .load-id {
        font-weight: 500;
        font-size: 25px;
        line-height: 37px;
      }
      .lastLocation {
        font-size: 14px;
        line-height: 40px;
        color: #a5a5a5;
        background: #f5f5f7;
        border-radius: 7px;
        // padding: 10px 15px;
        display: block;
        width: 200px;
        height: 40px;
      }
      .status {
        background: #ffe5d0;
        border-radius: 7px;
        font-weight: 300;
        font-size: 14px;
        line-height: 18px;
        color: #ff8e34;
        padding: 10px 15px;
      }
      .dotIcon {
        width: 70%;
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        svg {
          width: 25px;
        }
      }
    }
    .block__cards {
      padding: 18px;
      padding-left: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .card:hover {
        box-shadow: var(--box-shadow);
      }
      .card__driver {
        border: 1px solid #f0f2ff;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        width: calc((100% - 80px) / 3.5);
        background-color: #fff;
        min-height: 300px;
        margin-bottom: 10px;
        border-radius: 7px;
        overflow: hidden;
        img {
          margin-top: 30px;
          width: 90px;
          height: 90px;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid #ffffff;
          box-sizing: border-box;
        }
        h3 {
          margin-top: 0px;
          font-weight: bold;
          font-size: 14px;
          line-height: 21px;
          color: #26284f;
        }
        ul {
          list-style: none;
          padding: 0;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          justify-content: flex-start;
          li {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            color: #b9c0d3;
            icon {
              width: 20%;
            }
            span {
              width: 80%;
              font-weight: normal;
              font-size: 11px;
              line-height: 16px;
              color: #b9c0d3;
              margin-left: 10px;
            }
          }
        }
        .card-item {
          margin-bottom: 5px;
        }
        .card-item__icon {
          width: 20px;
        }
        span.view__more {
          width: 100%;
          display: inline-block !important;
          height: 50px;
          color: #4064e3;
          border-radius: 4px;
          text-align: center;
          line-height: 50px;
          background: #e7ecff;
          cursor: pointer;

          &:hover {
            background: var(--purpule);
            color: #fff;
          }
        }
      }
      .card__company {
        padding: 24px 55px;
        border-radius: 8px;
        border: 1px solid #f0f2ff;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-start;
        margin: 10px;
        width: calc((100% - 80px) / 2.5);
        background-color: #fff;
        min-height: 300px;
        margin-bottom: 10px;
        overflow: hidden;
        .card__item * {
          margin: 0px;
        }
        .card__item p {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 21px;
          color: #a3a6b9;
        }
        .card__item span {
          font-weight: normal;
          font-size: 16px;
          line-height: 21px;
          color: #4064e3;
        }
      }
    }
  }
  .block__loadInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    width: 70%;
    .mainInfo__item {
      p {
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        color: #a3a6b9;
        margin: 0;
      }
      span {
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        color: #4064e3;
      }
    }
  }
  .block__footer {
    display: flex;
    width: 100%;
    min-height: 300px;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    .footer__map {
      width: 60%;
    }
    .footer__status {
      &:hover {
        box-shadow: var(--box-shadow);
      }
      width: 35%;
      height: 300px;
      padding: 30px;
      background: #f7f8ff;
      border: 1px solid #f0f2ff;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      border-radius: 7px;
      position: relative;
      &::before {
        content: " ";
        display: block;
        position: absolute;
        top: 33%;
        left: 15%;
        width: 0;
        color: #333;
        height: 115px;
        border-left: 1px solid #e6e7f4;
      }
      .status__item {
        p {
          font-weight: normal;
          font-size: 16px;
          line-height: 21px;
          color: #a3a6b9;
          margin: 0;
          margin-bottom: 8px;
        }
        li {
          font-weight: normal;
          font-size: 16px;
          line-height: 21px;
          color: #2c48bf;
          list-style-position: outside;
        }
      }
    }
  }
  @media screen and (max-width: 1295px) {
    .block {
      .block__footer {
        flex-direction: column;
        padding-left: 20px;
        .footer__map,
        .footer__status {
          width: calc(100%);
          margin-top: 20px;
          &::before {
            left: 55px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .block {
      .block__cards {
        flex-wrap: wrap;
        .card__driver,
        .card__company {
          width: calc((100% - 80px) / 2);
        }
        .card__company:last-child {
          width: calc(100%);
        }
      }
    }
  }
  @media screen and (max-width: 890px) {
    .block {
      .block__top {
        .load-id {
          width: 200px;
        }
        .lastLocation {
          min-width: 30%;
        }
        .dotIcon {
          width: 50%;
          font-size: 16px;
        }
      }
      .block__loadInfo {
        width: 90%;
      }
    }
  }
  @media screen and (max-width: 752px) {
    .block {
      p {
        font-size: 15px !important;
      }
      span {
        font-size: 14px !important;
      }
      .block__top {
        .load-id {
          width: 200px;
          font-size: 17px;
        }
      }
      .block__cards > .card {
        width: calc(100%);
      }
      .block__loadInfo {
        width: 100%;
      }
      .block__footer {
        .footer__status {
          .status__item {
            p {
              font-size: 15px;
            }
            li {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 631px) {
    h2 {
      font-size: 17px;
    }
    .block {
      .block__loadInfo {
        flex-wrap: wrap;
        .mainInfo__item {
          width: 50%;
          margin-top: 15px;
        }
      }
      .block__top {
        .load-id {
          font-size: 16px;
        }
        .lastLocation,
        .status {
          display: block;
          font-size: 13px;
          height: 35px;
        }
      }
      .block__footer {
        .footer__status {
          .status__item {
            p {
              font-size: 14px;
            }
            li {
              font-size: 13px;
            }
          }
        }
      }
      p {
        font-size: 14px !important;
      }
      span {
        font-size: 13px !important;
      }
    }
  }
  @media screen and (max-width: 590px) {
    .block {
      .block__top {
        flex-wrap: wrap;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        width: 100%;
        position: relative;
        & > span {
          width: 199px;
          margin-top: 10px;
        }
        .dotIcon {
          position: absolute;
          top: 10px;
          right: 25px;
        }
      }
      .block__footer {
        .footer__status {
          &::before {
            top: 29%;
          }
        }
      }
    }
  }
`;
