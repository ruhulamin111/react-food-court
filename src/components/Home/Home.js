import React from 'react';
import Banner from '../Banner/Banner';
import Drinks from '../Drinks/Drinks';
import PageTitle from '../PageTitle/PageTitle';
import Product from '../Product/Product';

const Home = () => {

    return (
        <>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <Product></Product>
            <Drinks></Drinks>
        </>
    );
};

export default Home;