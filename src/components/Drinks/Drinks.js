import React, { useEffect, useState } from 'react';
import Drink from '../Drink/Drink';

const Drinks = () => {
    const [drinks, setDrinks] = useState([])
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
            .then(res => res.json())
            .then(data => setDrinks(data.drinks))
    }, [drinks])

    return (
        <div id='drinks' className='my-5'>
            <h2 className='text-success text-center my-5'>Our Categorious Soft Drinks</h2>
            <div className='row w-100 mx-auto'>
                {
                    drinks.slice(0, 10).map((drink, index) => <Drink
                        key={index}
                        drink={drink}
                    ></Drink>)
                }
            </div>
        </div>
    )
};

export default Drinks;