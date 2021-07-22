import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationSection = props => {
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
            <input type="name" required/>
        <label htmlFor="email">endereço de email:</label>
            <input type="email" required/>
        <label htmlFor="password">senha:</label>
            <input type="password" required/>
        <label htmlFor="password">confirme a senha:</label>
            <input type="password" required/>
            <button type="submit" className="btn__registre__se">junte-se ao shops</button>
        </form>
        </div>
        </div>
        </section>
    );
};

export default RegistrationSection;
