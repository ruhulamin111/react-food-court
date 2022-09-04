import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false)

    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    const verifyEmail = async () => {
        await sendEmailVerification()
        alert('Sent email')
    }
    const handleSubmit = event => {
        event.preventDefault();
        // const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        verifyEmail()
        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }
    }



    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" name='name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' />
                </div>
                <div className="mb-3 form-check">
                    <input onClick={() => setAgree(!agree)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className={agree ? 'text-success' : ''} htmlFor="exampleCheck1">Accept terms and condition ?</label>
                </div>
                <button disabled={!agree} type="submit" className='w-50 btn btn-outline-primary d-block mx-auto' >Sign Up</button>
            </form>
            <div className='d-flex justify-content-between'>
                <p className='my-2 '>Have an account? <Link to='/signin' className=' text-decoration-none' >Sign in</Link></p>
                <p className='my-2 '><Link to='' className=' text-decoration-none'>Forgotten Password</Link></p>

            </div>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default SignUp;