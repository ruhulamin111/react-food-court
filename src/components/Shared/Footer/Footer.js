import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='py-5 text-center bg-dark text-white'>
            <p>Food Court &copy; {year}</p>
        </div>
    );
};

export default Footer;