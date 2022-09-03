import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setItem(data.meals[0]))
    }, [id])

    return (
        <div>
            <img src={item.strMealThumb} alt="" />
            <p>{item.strMeal}</p>

        </div>
    );
};

export default ItemDetails;