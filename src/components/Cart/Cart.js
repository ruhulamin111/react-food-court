import React from 'react';
import { useParams } from 'react-router-dom';
import useSingleProduct from '../../hooks/useSingleProduct';

const Cart = () => {
    const { id } = useParams()
    const [item] = useSingleProduct(id)



    return (
        <div>
            <h2>Your selected product is here</h2>
            <div className='w-25 mx-auto'>
                <form >
                    <input className='w-100 my-2 py-2' type="text" name="name" id="name" placeholder='name' />
                    <br />
                    <input className='w-100 my-2 py-2' type="email" name="email" id="email" placeholder='email' />
                    <br />
                    <input className='w-100 my-2 py-2' type="submit" value="order now" />
                </form>
            </div>
            <p>{item.name}</p>
        </div>
    );
};

export default Cart;