import React from 'react';

const ProductDetails = ({ meal }) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = meal;

    return (
        <div className='col col-sm-12 col-md-6 col-lg-4 border p-1 shadow-sm'>
            <img className='img-fluid' src={strCategoryThumb} alt="" />
            <h5>{strCategory}</h5>
            <p>{strCategoryDescription.slice(0, 100)}</p>
            <button className='btn btn-dark float-end'>Order Now</button>
        </div>
    );
};

export default ProductDetails;