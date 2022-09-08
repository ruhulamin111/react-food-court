import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth)
    const email = user.email;
    const [order, setOrder] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const orderList = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/order?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setOrder(data)
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/signin')
                }
            }
        }
        orderList()
    }, [email, navigate])

    return (
        <div>
            <h3>Your ordered product {order.length}</h3>
            <p>{order.map(item => <p key={item._id}>{item._id}</p>)}</p>
        </div>
    );
};

export default Orders;