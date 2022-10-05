import React, { FunctionComponent, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Signup: FunctionComponent = () => {

return(
<form>
<div className="form">
    <div className="container">
    <div className="champ">
    <div className="message">Votre mot de passe doit contenir au moins 6 caractères.</div>
    <div><label htmlFor="pseudo">Pseudo :</label><input type="text" /></div>
    <div><label htmlFor="mail">Email :</label><input type="mail" /></div>
    <div><label htmlFor="password">Mot de passe :</label><input type="password" /></div>
    </div>
    <div className="liseret"></div>
    <button type="submit" className="btn">S'ENREGISTRER</button>
    </div>
    </div>
</form>
);

}

export default Signup;