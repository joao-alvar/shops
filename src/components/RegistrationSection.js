import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import Button from './Button'

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};
class RegistrationSection extends Component {
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
    
    render() {
const { displayName, email, password, confirmPassword } = this.state;

        return (
            <section className="registration">
            <div className="registration__container">
            <div className="title__container">
                <Link to="/" style={{ textDecoration: 'none' }}><h1 className="registration__title">shops.</h1></Link>
            </div>
            <div className="registration__wrap">
            <div className="registration__links">
                <div style={{ borderBottom: '2px solid #000' }} className="registre__se">
                <span className="registre__se__wrap">
                <h3>registrar</h3>
                </span>
                </div>
                <div className="sign__in"><Link to="/signin" style={{ textDecoration: 'none', color: '#777' }} className="link"><h3>entrar</h3></Link></div>
            </div>
            <form style={{ marginTop: '14%' }}>
            <label htmlFor="name">nome completo:</label>
                <FormInput
                type="text"
                name="displayName"
                value={displayName} 
                onChange={this.handleChange}
                />
            <label htmlFor="email">endereço de email:</label>
                  <FormInput
                type="email"
                name="email"
                value={email} 
                onChange={this.handleChange}
                />
            <label htmlFor="password">senha:</label>
                  <FormInput
                type="password"
                name="password"
                value={password} 
                onChange={this.handleChange}
                />
            <label htmlFor="password">confirme a senha:</label>        
                  <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword} 
                onChange={this.handleChange}
                required
                />
                <Button type="submit" className="btn__registre__se">
                junte-se ao shops
                </Button>
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
};

export default RegistrationSection;
