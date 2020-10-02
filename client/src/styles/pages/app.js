import styled from "styled-components";

export const StyledApp = styled.section`
  background-color: var(--bg-light);
  .top-app {
    margin-left: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    padding-bottom: 25px;
    border-bottom: 1px solid #dbe5ea;
    h2 {
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
    }
    .add-app {
      background: linear-gradient(259.86deg, #ff8e34 -42.11%, #ff5c4a 85.54%);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 26px;
      padding: 5px 15px;
      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 100px 80px rgba(255, 92, 74, 0.07),
          0px 41.7776px 33.4221px rgba(255, 92, 74, 0.0503198),
          0px 22.3363px 17.869px rgba(255, 92, 74, 0.0417275),
          0px 12.5216px 10.0172px rgba(255, 92, 74, 0.035),
          0px 6.6501px 5.32008px rgba(255, 92, 74, 0.0282725),
          0px 2.76726px 2.21381px rgba(255, 92, 74, 0.0196802);
        transition: all 0.3s ease-in;
      }
    }
    @media (max-width: 450px) {
      h2 {
        font-size: 15px;
        line-height: 15px;
      }
      .add-driver {
        height: 30px;
        padding: 0;
        width: 100px;
      }
    }
  }
  .card__group {
    width: 100%;
    padding: 0px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: space-around;
    padding-bottom: 30px;

    .card__driver {
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      width: calc((100% - 80px) / 4);
      background-color: #fff;
      min-height: 300px;
      margin-bottom: 10px;
      box-shadow: var(--box-shadow);
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
      @media (max-width: 1125px) {
        & {
          width: calc((100% - 80px) / 3);
        }
      }
      @media (max-width: 850px) {
        & {
          width: calc((100% - 80px) / 2);
        }
      }
      @media (max-width: 650px) {
        & {
          width: calc((100%));
        }
      }
    }
  }
`;

export const StyledAppAdd = styled.section`
  .top-app {
    margin-left: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    padding-bottom: 25px;
    border-bottom: 1px solid #dbe5ea;
    h2 {
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
    }
  }
  form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    .persons__form {
      display: flex;
      justify-content: space-around;
      align-items: center;
      div {
        .input-container {
          width: 400px;
        }
      }
    }
    .form__box {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      .input-container {
        width: 300px;
        select {
          width: 100%;
          height: 34px;
          padding-left: 40px;
          border: none;
          color: #000;
        }
      }
    }
  }
`;
