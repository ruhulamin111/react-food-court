import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSingleProduct from '../../hooks/useSingleProduct';

const ItemDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [item] = useSingleProduct(id)

    const handleNavigate = () => {
        navigate(`/cart/${id}`)
    }

    return (
        <div>
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <button onClick={handleNavigate} className='btn btn-outline-dark '>
                Proceed Now
            </button>
        </div>
    );
};

export default ItemDetails;