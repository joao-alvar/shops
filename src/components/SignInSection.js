import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import ButtonGoogle from "./ButtonGoogle";
import { signInWithGoogle, auth } from "./../firebase/utils";

import FormInput from "./FormInput";
import Button from "./Button";

const SignInSection = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password).catch(() => {
        resetForm();
        const err = [
          "Parece que seu endereço de e-mail ou senha estavam incorretos. Quer tentar de novo?",
        ];
        setErrors(err);
      });
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <section className="registration">
      <div className="registration__container" style={{ height: "72em" }}>
        <div className="title__container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="registration__title">shops.</h1>
          </Link>
        </div>
        {errors.length > 0 && (
          <div className="error__container">
            <ul className="inputError error__message">
              <ErrorOutlineIcon
                className="erro__icon"
                style={{ fontSize: 29 }}
              />
              {errors.map((e, index) => {
                return <li key={index}>{e}</li>;
              })}
            </ul>
          </div>
        )}

        <div className="registration__wrap">
          <div className="registration__links">
            <div className="registre__se">
              <span className="registre__se__wrap">
                <Link
                  to="/registration"
                  style={{ textDecoration: "none", color: "#777" }}
                  className="link"
                >
                  <h3>registrar</h3>
                </Link>
              </span>
            </div>
            <div
              style={{ borderBottom: "2px solid #000" }}
              className="sign__in"
            >
              <h3>entrar</h3>
            </div>
          </div>
          <div className="google__register">
            <h2>ENTRE COM...</h2>
            <ButtonGoogle onClick={signInWithGoogle}>
              <div className="google__btn__logo"></div>
              <span className="google__btn__text">google</span>
            </ButtonGoogle>
            <div className="register__text">
              <h2>OU ENTRE COM O E-MAIL</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit} style={{ marginTop: "5%" }}>
            <label htmlFor="email">endereço de email:</label>
            <FormInput
              type="email"
              name="email"
              value={email}
              id="email"
              required
              handleChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">senha:</label>
            <FormInput
              type="password"
              name="password"
              value={password}
              id="password"
              required
              handleChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">entrar</Button>
            <Link to="recuperarconta" className="esqueceu__password">
              <h3>Esqueceu a senha?</h3>
            </Link>
            {/* <label htmlFor="email">endereço de email:</label>
                <input type="email" required/>
            <label htmlFor="password">senha:</label>
                <input type="password" required/>
                <Button type="submit">entrar</Button>
                 */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignInSection;
