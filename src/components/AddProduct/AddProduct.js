import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://glacial-brook-87330.herokuapp.com/food', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    };

    return (
        <div className='w-50 mx-auto '>
            <form className='w-100 my-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-100 my-2 py-2' placeholder='name' {...register("name")} />
                <br />
                <input className='w-100 my-2 py-2' placeholder='img' {...register("img")} />
                <br />
                <input className='w-100 my-2 py-2' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;