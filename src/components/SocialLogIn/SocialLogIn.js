import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../assests/logo/google.png'
import github from '../../assests/logo/github.png'
import facebook from '../../assests/logo/facebook.png'


const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const [signInWithFacebook, user3, loading3, error3] = useSignInWithFacebook(auth);



    return (
        <div className='w-100'>
            <div>
                <div>
                </div>
                <span>or</span>
                <div>
                </div>
            </div>
            <div >
                <button className='my-3 w-50 btn btn-outline-success d-block mx-auto' onClick={() => signInWithGoogle()}>
                    <img className='mx-3' height={16} src={google} alt="" />                  Google Sign In</button>
                <button className='my-3 w-50 btn btn-outline-success d-block mx-auto' onClick={() => signInWithGithub()}>
                    <img className='mx-3' height={16} src={github} alt="" />
                    Github Sign In</button>
                <button className='my-3 w-50 btn btn-outline-success d-block mx-auto' onClick={() => signInWithFacebook()}>
                    <img className='mx-3' height={16} src={facebook} alt="" />
                    Facebook Sign In</button>

            </div>

        </div>
    );
};

export default SocialLogIn;