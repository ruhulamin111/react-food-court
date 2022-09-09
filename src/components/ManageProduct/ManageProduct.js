import React from 'react';
import useProducts from '../../hooks/useProducts';



const ManageProduct = () => {
    const [meals, setMeals] = useProducts()

    const handleManage = id => {
        const proceed = window.confirm('are you sure to delete this item ?')
        if (proceed) {
            fetch(`https://glacial-brook-87330.herokuapp.com/food/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = meals.filter(meal => meal._id !== id)
                    setMeals(remaining)
                })
        }
    }

    return (
        <div>
            <p>hello</p>
            {
                meals.map((meal, index) => <div key={index}>
                    <h4>{meal.name}</h4>
                    <button onClick={() => handleManage(meal._id)}>Delete</button>
                </div>)
            }

        </div>
    );
};

export default ManageProduct;