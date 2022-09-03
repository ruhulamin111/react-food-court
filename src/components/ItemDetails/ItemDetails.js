import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setItem(data.meals[0]))
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