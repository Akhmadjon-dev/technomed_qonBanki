import styled from 'styled-components';

const StyledInputWrapper = styled.div`
    display: flex;
    align-items: ${props => props.align || 'flex-start'};
    justify-content: ${props => props.justify || 'center'};
    flex-wrap: wrap;
    flex-direction: ${props => props.direction || 'column'};
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;

    .input-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 100%;
      padding: 4px 7px;
      background-color: #fff;
      color: var(--purpule);
      border-right: 1px solid var(--purpule);
    }

    .input-container {
      width: 100%;
      position: relative;
      border-radius: 4px;
      border: 1px solid var(--purpule);
      overflow: hidden;
    }
`;

const StyledInput = styled.input`
  width: ${props => props.width || '100%'};
  height: 34px;
  padding-left: 40px;
  border: none;
  color: #000;

  &.rounded {
    border-radius: 30px;
  }
  &.small {
    height: 28px;
  }
  &.large {
    height: 42px;
  }
`;

export { StyledInput, StyledInputWrapper };