import React, { Component } from "react";
import FormInput from "./FormInput";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Link, withRouter } from "react-router-dom";
import Button from "./Button";
import { auth } from "./../firebase/utils";

const initialState = {
  email: "",
  errors: [],
};

class RecuperarConta extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email } = this.state;

      const config = {
        url: "http://localhost:3000/signin",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push("/signin");
        })
        .catch(() => {
          const err = ["Email não encontrado, tente novamente."];
          this.setState({
            errors: err,
          });
        });
    } catch (err) {
      // console.log(err);
    }
  };

  render() {
    const { email, errors } = this.state;

    return (
      <div>
        <section className="registration" style={{ position: "fixed" }}>
          <div className="registration__container">
            <div className="title__container">
              <Link to="/" style={{ textDecoration: "none" }}>
                <h1 className="registration__title">shops.</h1>
              </Link>
            </div>
            <div className="registration__wrap">
              <div className="registration__links">
                <div className="recuperar__senha__title">
                  <span className="">
                    enviaremos um e-mail para você redefinir sua senha
                  </span>
                </div>
              </div>
              <form onSubmit={this.handleSubmit} style={{ marginTop: "5%" }}>
                {errors.length > 0 && (
                  <div className="error__container">
                    <ul className="inputError error__message">
                      <ErrorOutlineIcon
                        className="erro__icon"
                        style={{ fontSize: 22, top: "34%" }}
                      />
                      {errors.map((e, index) => {
                        return (
                          <li key={index} style={{ paddingLeft: "6%" }}>
                            {e}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                <label htmlFor="email">endereço de email:</label>
                <FormInput
                  type="email"
                  name="email"
                  value={email}
                  required
                  onChange={this.handleChange}
                />
                <Button type="submit">redefinir senha</Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(RecuperarConta);
