import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  signInSuccess: false,
  signInError: [],
  registrationSuccess: false,
  registrationError: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: action.payload,
      };
    case userTypes.SIGN_IN_ERROR:
      return {
        ...state,
        signInError: action.payload,
      };
    case userTypes.REGISTRATION_SUCCESS:
      return {
        ...state,
        signInSuccess: action.payload,
      };
    case userTypes.REGISTRATION_ERROR:
      return {
        ...state,
        signInError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
