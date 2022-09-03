import React, { useEffect, useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const Product = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [meals])


    return (
        <div id="food" className='my-5'>
            <h2 className='text-success text-center my-5'>Our Categorious Food</h2>
            <div className='row w-100 mx-auto'>
                {
                    meals.slice(0, 10).map((meal, index) => <ProductDetails
                        key={index}
                        meal={meal}
                    ></ProductDetails>)
                }
            </div>


        </div>
    );
};

export default Product;