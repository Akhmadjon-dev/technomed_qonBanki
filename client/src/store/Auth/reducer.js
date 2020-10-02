import * as types from "./actionTypes";

const initialState = {
  error: false,
  isLogged: false,
  msg: "",
  pending: false,
  success: false,
  user: null,
  userType: "user",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_ERROR:
    case types.SIGN_UP_ERROR: {
      console.log(action);
      return {
        error: true,
        isLogged: false,
        msg: action.payload,
        pending: false,
        success: false,
      };
    }
    case types.SIGN_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS: {
      return {
        pending: false,
        error: false,
        msg: null,
        isLogged: true,
        success: true,
        user: { ...action.payload },
      };
    }
    case types.SIGN_IN_PENDING:
    case types.SIGN_UP_PENDING: {
      return {
        error: false,
        isLogged: false,
        msg: null,
        pending: true,
        success: false,
        user: null,
        userType: null,
      };
    }
    default: {
      return initialState;
    }
  }
};
