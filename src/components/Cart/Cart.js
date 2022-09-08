import { isDisabled } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useSingleProduct from '../../hooks/useSingleProduct';

const Cart = () => {
    const { id } = useParams()
    const [item] = useSingleProduct(id)
    const [user] = useAuthState(auth)

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        const order = {
            name: user.displayName,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }

        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is confirmed')
                    event.target.reset()
                    navigate('/')
                }

            })
    }

    return (
        <div>
            <h2>Your selected product is {item.name}</h2>
            <div className='w-25 mx-auto'>
                <form onSubmit={(handleSubmit)}>
                    <input className='w-100 my-2 py-2' type="text" name="name" id="name" placeholder='name' value={user.displayName} />
                    <br />
                    <input className='w-100 my-2 py-2' type="email" name="email" id="email" placeholder='email' value={user.email} />
                    <br />
                    <input className='w-100 my-2 py-2' type="text" name="address" id="address" placeholder='address' required />
                    <br />
                    <input className='w-100 my-2 py-2' type="number" name="phone" id="phone" placeholder='phone' required />
                    <br />
                    <input className='w-100 my-2 py-2 btn btn-info' type="submit" value="Place order" />
                </form>
            </div>

        </div>
    );
};

export default Cart;