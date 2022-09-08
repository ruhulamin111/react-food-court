import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );

    if (loading) {
        return <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    if (!user.emailVerified) {
        return <div>
            <p>Please verify email</p>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Again send email
            </button>
        </div>
    }

    return children;
};

export default RequireAuth;