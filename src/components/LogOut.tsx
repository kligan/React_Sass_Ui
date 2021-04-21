import React from 'react';

type Inputs = {
 signInEmail: string;
 logout: React.MouseEventHandler<HTMLButtonElement>;
};

const LogOut = ({ signInEmail, logout }: Inputs) => {

    return(
        <div className="cardDiv">
            <h1>Signed in as {signInEmail}</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default LogOut;