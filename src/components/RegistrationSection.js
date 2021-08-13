import React, { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import { auth, handleUserProfile } from "./../firebase/utils";

import FormInput from "./FormInput";
import Button from "./Button";

const RegistrationSection = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const reset = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      const err = ["Confirme a Senha."];
      setErrors(err);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await handleUserProfile(user, { displayName });

      reset();
      props.history.push("/");
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <section className="registration">
      <div className="registration__container" style={{ height: "66em" }}>
        <div className="title__container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="registration__title">shops.</h1>
          </Link>
        </div>
        <div className="registration__wrap">
          <div className="registration__links">
            <div
              style={{ borderBottom: "2px solid #000" }}
              className="registre__se"
            >
              <span className="registre__se__wrap">
                <h3>registrar</h3>
              </span>
            </div>
            <div className="sign__in">
              <Link
                to="/signin"
                style={{ textDecoration: "none", color: "#777" }}
                className="link"
              >
                <h3>entrar</h3>
              </Link>
            </div>
          </div>
          <form className="registration__form" onSubmit={handleFormSubmit}>
            <label htmlFor="name">nome completo:</label>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              id="name"
              required
              handleChange={(e) => setDisplayName(e.target.value)}
            />
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
              minLength="8"
              handleChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">confirme a senha:</label>
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              id="confirmPassword"
              minLength="8"
              required
              handleChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.length > 0 && (
              <ul className="inputError senha__error">
                <ErrorOutlineIcon
                  className="senha__erro__icon"
                  style={{ fontSize: 22 }}
                />
                {errors.map((err, index) => {
                  return <li key={index}>{err}</li>;
                })}
              </ul>
            )}
            <Button type="submit">junte-se ao shops</Button>
            {/* <label htmlFor="name">nome completo:</label>
                <input type="name" required/>
            <label htmlFor="email">endereço de email:</label>
                <input type="email" required/>
            <label htmlFor="password">senha:</label>
                <input type="password" required/>
            <label htmlFor="password">confirme a senha:</label>
                <input type="password" required/>
                <button type="submit" className="btn__registre__se">junte-se ao shops</button> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default withRouter(RegistrationSection);
