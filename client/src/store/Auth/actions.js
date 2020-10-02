import * as types from "./actionTypes";
import Axios from "../../utils/axios";

export const signInSuccess = (payload) => {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload,
  };
};
export const signInError = (err) => {
  return {
    type: types.SIGN_IN_ERROR,
    payload: err,
  };
};

// ------- SIGN UP --------------
export const signUpSuccess = (payload) => {
  return {
    type: types.SIGN_UP_SUCCESS,
    payload,
  };
};

// ------- SIGN OUT -------------
export const signOutError = (err) => ({
  type: types.SIGN_OUT_ERROR,
  payload: err,
});

export const signOutPending = () => ({
  type: types.SIGN_OUT_PENDING,
});

export const signOutSuccess = (payload) => {
  return {
    type: types.SIGN_OUT_SUCCESS,
    payload,
  };
};

export const signOutAction = () => (dispatch) => {
  dispatch(signOutPending());
  return Axios.get("/auth/sign-out")
    .then(() => dispatch(signOutSuccess()))
    .catch((err) => dispatch(signOutError(err.message)));
};
