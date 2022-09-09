import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useToken from '../../hooks/useToken';

const SignIn = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [signInWithEmailAndPassword, user, loading, error1] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useToken(user)
    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)
        // const { data } = await axios.post('http://localhost:5000/signin', { email })
        // localStorage.setItem('accessToken', data.accessToken)
        // navigate(from, { replace: true });
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Sent email for verification')
        }
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" className='w-50 btn btn-outline-primary d-block mx-auto' >Sign In</button>
            </form>
            <div className='d-flex justify-content-between'>
                <p className='my-2 '>Have an account? <Link to='/signup' className=' text-decoration-none'>Sign up</Link></p>
                <p className='my-2 '><Link to='' onClick={handleResetPassword} className=' text-decoration-none'>Forgotten Password</Link></p>
            </div>
            <SocialLogIn></SocialLogIn>

        </div>
    );
};

export default SignIn;