import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  #spinner-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    z-index: 1200;
    background-color: rgb(82 123 221 / 10%);
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    display: none;
    &.show {
      display: flex;
    }
    .ant-spin-dot {
      font-size: 50px;
    }
    .ant-spin-dot i {
      width: 20px;
      height: 20px;
      background-color: #0c2461;
      opacity: 1;
    }
  }

  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .text-center {
    text-align: center;
  }
  .d-flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .p-30 {
    padding: 30px;
  }

  /* ----Autocomplete----- */
  .location-search-input,
  .default-input {
    width: 100%;
    height: 42px;
    display: inline-block;
    padding: 7px 10px 7px 20px;
    font-size: 16px;
    border-radius: 20px;
    border: 1px solid var(--grey);
    background-color: var(--bg-light);
    outline: none;
  }
  .autocomplete-dropdown-container {
    background: #fff;
    box-shadow: var(--box-shadow);
    position: absolute;
    top: 45px;
    z-index: 99;
    width: 100%;
  }
  .suggestion-item {
    padding: 2px 5px;
  }
  .suggestion-item--active {
    padding: 2px 5px;
  }

  .ant-picker-input {
    vertical-align: super;
    height: 100%;
  }
`;