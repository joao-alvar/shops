import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonGoogle from './ButtonGoogle';
import { signInWithGoogle, auth } from './../firebase/utils'

import FormInput from './FormInput';
import Button from './Button';

const initialState = {
    email: '',
    password: '',
    errors: []
};

class SignInSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password)
            .catch(() => {
                const err = ['E-mail ou senha incorreto, tente novamente.'];
                this.setState({
                    errors: err
                });
            });
            this.state({
                ...initialState
            });
            
        } catch(err) {
            // console.log(err);
        }
    }
    
    render() {
        const { email, password, errors } = this.state;

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
            <div className="google__register">
                <h2>ENTRE COM...</h2>
                <ButtonGoogle onClick={signInWithGoogle}>
                <div className="google__btn__logo">
                </div>
                <span className="google__btn__text">google</span>
                </ButtonGoogle>
            <div className="register__text">
                <h2>OU ENTRE COM O E-MAIL</h2>
                </div>
                </div>

                {errors.length > 0 && (
                <ul className="inputError">
            {errors.map((e, index) => {
                return (
                    <li key={index}>
                        {e}
                    </li>
                );
            })}
            </ul>
            )}

            <form onSubmit={this.handleSubmit} style={{ marginTop: '5%' }}>
           
                <label htmlFor="email">endereço de email:</label>
                <FormInput
                type="email"
                name="email"
                value={email}
                required
                onChange={this.handleChange}
                />
                <label htmlFor="password">senha:</label>
                 <FormInput
                type="password"
                name="password"
                value={password}
                required
                onChange={this.handleChange}
                />
                <Button type="submit">entrar</Button>
                <Link to="recuperarconta" className="esqueceu__password"><h3>Esqueceu a senha?</h3></Link>
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
    }
    };


export default SignInSection;
