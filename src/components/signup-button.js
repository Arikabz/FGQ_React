// src/components/signup-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = (props) => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button onClick={()=>loginWithRedirect({screen_hint:'signup'})} className={props.looks}>Registrarse</button>
    );
};

export default LoginButton;
