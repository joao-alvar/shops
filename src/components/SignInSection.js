import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { signInWithGoogle } from './../firebase/utils'

class SignInSection extends Component {

    handleSubmit = async e => {
        e.preventDefault();
    }
    render() {
        return (
            <section className="registration" style={{ position: 'fixed' }}>
            <div className="registration__container">
            <div className="title__container">
                <Link to="/" style={{ textDecoration: 'none' }}><h1 className="registration__title">shops.</h1></Link>
            </div>
            <div className="registration__wrap">
            <div className="registration__links">
                <div className="registre__se">
                <span className="registre__se__wrap">
                <Link to="/registration" style={{ textDecoration: 'none', color: '#777' }} className="link"><h3>registrar</h3></Link>
                </span>
                </div>
                <div  style={{ borderBottom: '2px solid #000' }} className="sign__in"><h3>entrar</h3></div>
            </div>
            <form onSubmit={this.handleSubmit} style={{ marginTop: '5%' }}>
            <div className="google__register">
                <h2>ENTRE COM...</h2>
                <Button onClick={signInWithGoogle}>
                <div className="google__btn__logo">
                </div>
                <span className="google__btn__text">google</span>
                </Button>
            <div className="register__text">
                <h2>OU ENTRE COM O E-MAIL</h2>
                </div>
                </div>
            <label htmlFor="email">endereço de email:</label>
                <input type="email" required/>
            <label htmlFor="password">senha:</label>
                <input type="password" required/>
                <button type="submit" className="btn__registre__se">entrar</button>
                <Link className="esqueceu__password"><h3>Esqueceu a senha?</h3></Link>
            </form>
            </div>
            </div>
            </section>
        );
    }
    };


export default SignInSection;
