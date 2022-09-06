import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ meal }) => {
    const { _id, strMeal, strMealThumb, } = meal;

    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/productdetails/${id}`)
    }

    return (
        <div className='col col-sm-12 col-md-6 col-lg-4 border p-1 shadow-sm'>
            <img className='img-fluid' src={strMealThumb} alt="" />
            <h5>{strMeal}</h5>
            <button onClick={() => handleDetails(_id)} className='btn btn btn-outline-dark float-end'>Order Now</button>
        </div>
    );
};

export default ProductDetails;