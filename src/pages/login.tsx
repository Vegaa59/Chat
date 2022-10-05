import React, { FunctionComponent, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/Login.css'

const Login: FunctionComponent = () => {

return(
<form>
    <div className="form">
    <div className="container">
    <div className="champ">
    <div className="message">Vous devez vous connecter.</div>
    <div><label htmlFor="mail">Identifiant :</label><input type="mail" /></div>
    <div><label htmlFor="password">Mot de passe :</label><input type="password" /></div>
    </div>
    <div className="liseret"></div>
    <button type="submit" className="btn">VALIDER</button>
    </div>
    <div className="linkDiv">
    <Link to="/signup" className="link">Créer un compte</Link>
    </div>
    </div>
    
</form>
);

}

export default Login;