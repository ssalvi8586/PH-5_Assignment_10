import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import { Navigate, useLocation } from "react-router-dom";
import Loading from '../Loading/Loading';


const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <div className='d-flex justify-content-center'><Loading /></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return <div className='d-flex justify-content-center'>{children}</div>;
};

export default RequireAuth;