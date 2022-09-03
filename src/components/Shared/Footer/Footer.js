import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='py-5 text-center bg-dark text-white'>
            <p>Genius Car &copy; {year}</p>
        </div>
    );
};

export default Footer;