import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/food/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    const handleNavigate = () => {
        navigate('/cart')
    }

    return (
        <div>
            <img src={item.strMealThumb} alt="" />
            <p>{item.strMeal}</p>
            <button onClick={handleNavigate} className='btn btn-outline-dark '>
                Proceed Now
            </button>
        </div>
    );
};

export default ItemDetails;