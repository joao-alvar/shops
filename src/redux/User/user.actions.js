import userTypes from "./user.types";
import { auth, handleUserProfile } from "../../firebase/utils";

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      await auth.signInWithEmailAndPassword(email, password).catch(() => {
        dispatch({
          type: userTypes.SIGN_IN_SUCCESS,
          payload: true,
        });
        // const err = [
        //   "Parece que seu endereço de e-mail ou senha estavam incorretos. Quer tentar de novo?",
        // ];
        // setErrors(err);
      });
    } catch (err) {
      // console.log(err);
    }
  };

export const registrationUser =
  ({ displayName, email, password, confirmPassword }) =>
  async (dispatch) => {
    if (password !== confirmPassword) {
      const err = ["Confirme a Senha."];
      dispatch({
        type: userTypes.REGISTRATION_ERROR,
        payload: err,
      });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await handleUserProfile(user, { displayName });
      dispatch({
        type: userTypes.REGISTRATION_SUCCESS,
        payload: true,
      });
    } catch (err) {
      // console.log(err);
    }
  };
