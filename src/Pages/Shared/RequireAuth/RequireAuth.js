import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import { Navigate, useLocation } from "react-router-dom";


const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return (
        <div>

        </div>
    );
};

export default RequireAuth;