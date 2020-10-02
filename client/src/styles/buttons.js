import styled from "styled-components";

const success = `
    display: inline-block;
    width: auto;
    margin: 0 5px;
    padding: 5px 10px;
    background: var(--success-light);
    color: var(--success);
    border-color: var(--success-light);
    border-radius: 4px;
    font-size: initial;
    outline: none;
    cursor: pointer;
    &.active {
        background: var(--success);
        color: #fff;
    }
    &.light {
        background: var(--success-light);
        color: var(--success);
    }
`;

const danger = `
    display: inline-block;
    width: auto;
    margin: 0 5px;
    padding: 5px 10px;
    background: var(--danger);
    color: var(--danger);
    border-color: var(--danger);
    border-radius: 4px;
    font-size: initial;
    outline: none;
    cursor: pointer;
    &.active {
        background: var(--danger);
        color: #fff;
    }
`;

const primary = `
    display: inline-block;
    width: auto;
    margin: 0 5px;
    padding: 5px 10px;
    background: var(--redish);
    color: #fff;
    border-color: var(--redish);
    border-radius: 4px;
    font-size: initial;
    outline: none;
    cursor: pointer;
    &.active {
        background: var(--blue);
        color: #fff;
    }
`;

const warning = `
    display: inline-block;
    width: auto;
    margin: 0 5px;
    padding: 5px 15px;
    background: var(--orange-dark);
    color: var(--white);
    border-color: var(--orange-dark);
    border-radius: 10px;
    font-size: initial;
    outline: none;
    cursor: pointer;
    &.active {
        background: var(--orange);
        color: #fff;
    }
`;

const custom = (props) => `
    display: ${props.display || "block"};
    width: ${props.width || "auto"};
    margin: ${props.margin};
    margin-top: ${props.marginTop};
    margin-right: ${props.marginRight};
    margin-bottom: ${props.marginBottom};
    margin-left: ${props.marginLeft};
    padding: ${props.padding || "10px 15px"};
    background: ${props.background || "initial"};
    color: ${props.color || "initial"};
    border-color: ${props.borderColor || "initial"};
    border-radius: ${props.borderRadius || "20px"};
    font-size: ${props.fontSize || "initial"};
    outline: none;
    cursor: pointer;
    
`;

const status = {
  success,
  primary,
  danger,
  warning,
};

const Button = styled.button`
  ${(props) => status[props.status] || custom}
  width: ${props => props.width || '100%'};
  margin: ${props => props.margin || '0'};
  text-transform: capitalize;
  border-color: transparent;
  min-width: 80px;
  height: 36px;

  &.rounded {
    border-radius: 30px;
  }
  &.small {
    height: 28px;
  }
  &.large {
    height: 42px;
  }

  &:disabled {
    background: var(--grey);
    border: 1px solid var(--grey);
    cursor: not-allowed;
  }
  &.btn-sm {
    padding: 5px 10px;
    border-radius: 0px;
  }
  &.btn-grid-toggle {
    font-size: 14px;
    width: 25px;
    min-width: auto;
    border-radius: 2px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue);
  }
  &:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  &:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  &.active {
    background-color: var(--light);
    border-color: var(--light);
    color: #fff;
  }
`;

export { Button };