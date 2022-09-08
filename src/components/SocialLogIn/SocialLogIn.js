import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../assests/logo/google.png'
import github from '../../assests/logo/github.png'
import facebook from '../../assests/logo/facebook.png'
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogIn = () => {
    let errorText;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const [signInWithFacebook, user3, loading3, error3] = useSignInWithFacebook(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (error || error2 || error3) {
        errorText = <p>{error?.message}{error2?.message}{error3?.message}</p>
    }

    return (
        <div className='w-100'>
            {errorText}
            <div className='d-flex align-items-center gap-2'>
                <div className='w-50 bg-dark' style={{ height: '1px' }}></div>
                <span>or</span>
                <div className='w-50 bg-dark' style={{ height: '1px' }}></div>
            </div>
            <div >
                <button className='my-3 w-50 btn btn-outline-success d-block mx-auto' onClick={() => signInWithGoogle()}>
                    <img className='mx-3' height={16} src={google} alt="" />        Continue with Google</button>
                <button className='my-3 w-50 btn btn-outline-success d-block mx-auto' onClick={() => signInWithFacebook()}>
                    <img className='mx-3' height={16} src={facebook} alt="" />
                    Continue with Facebook</button>
                <button className='my-3 w-50 btn btn-outline-success d-block mx-auto' onClick={() => signInWithGithub()}>
                    <img className='mx-3' height={16} src={github} alt="" />
                    Continue with Github</button>


            </div>

        </div >
    );
};

export default SocialLogIn;