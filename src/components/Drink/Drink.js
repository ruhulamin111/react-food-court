import React from 'react';

const Drink = ({ drink }) => {
    const { strDrink, strDrinkThumb, idDrink } = drink;

    return (
        <div className='col col-sm-12 col-md-6 col-lg-4 border p-1 shadow-sm'>
            <img className='img-fluid' src={strDrinkThumb} alt="" />
            <h5>{strDrink}</h5>
            <p>{idDrink}</p>
            <button className='btn btn-outline-dark float-end'>Order Now</button>
        </div>
    );
};

export default Drink;