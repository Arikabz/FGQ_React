// src/auth/protected-route.js

import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import RadialProgress from '../components/RadialProgress';

const ProtectedRoute = ({ component, ...args }) => {
    withAuthenticationRequired(component, {
      onRedirecting: () => <RadialProgress />,
    })
}
  

export default ProtectedRoute;
