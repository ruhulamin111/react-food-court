import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth)
    const email = user.email;
    const [order, setOrder] = useState([])
    useEffect(() => {
        const orderList = async () => {
            const { data } = await axios.get(`http://localhost:5000/order?email=${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setOrder(data)
        }
        orderList()
    }, [email])

    return (
        <div>
            <h3>Your ordered product {order.length}</h3>
            <p>{order.map(item => <p key={item._id}>{item._id}</p>)}</p>
        </div>
    );
};

export default Orders;