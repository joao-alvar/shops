import React, { Component } from "react";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import { auth, handleUserProfile } from "./../firebase/utils";

import FormInput from "./FormInput";
import Button from "./Button";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: [],
};
class RegistrationSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      const err = ["Confirme a Senha."];
      this.setState({
        errors: err,
      });

      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await handleUserProfile(user, { displayName });

      this.setState({
        ...initialState,
      });
    } catch (err) {
      // console.log(err);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword, errors } =
      this.state;

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
            <form style={{ marginTop: "14%" }} onSubmit={this.handleFormSubmit}>
              <label htmlFor="name">nome completo:</label>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                id="name"
                required
                onChange={this.handleChange}
              />
              <label htmlFor="email">endereço de email:</label>
              <FormInput
                type="email"
                name="email"
                value={email}
                id="email"
                required
                onChange={this.handleChange}
              />
              <label htmlFor="password">senha:</label>
              <FormInput
                type="password"
                name="password"
                value={password}
                id="password"
                required
                minLength="8"
                onChange={this.handleChange}
              />
              <label htmlFor="confirmPassword">confirme a senha:</label>
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                id="confirmPassword"
                minLength="8"
                required
                onChange={this.handleChange}
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
  }
}

export default RegistrationSection;
