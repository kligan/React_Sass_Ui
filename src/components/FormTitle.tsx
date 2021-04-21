import React from 'react';
import Logo  from '../images/logo.svg';


const FormTitle = () => {

    return(
        <div className="FormTitle">
            <img alt="LogoImage" src={Logo} />
            <h1>Operations studio</h1>
            <p>Please enter your email below</p>
        </div>
    )
}

export default FormTitle;