import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const SignIn = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className='w-50 btn btn-outline-primary d-block mx-auto' >Sign In</button>
            </form>
            <div className='d-flex justify-content-between'>
                <p className='my-2 '>Have an account? <Link to='/signup' className=' text-decoration-none'>Sign up</Link></p>
                <p className='my-2 '><Link to='' className=' text-decoration-none'>Forgotten Password</Link></p>

            </div>

            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default SignIn;