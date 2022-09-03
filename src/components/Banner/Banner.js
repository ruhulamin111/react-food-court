import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assests/image/banner1.jpg';
import banner2 from '../../assests/image/banner2.jpg';
import banner3 from '../../assests/image/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel id='banner' className=''>
                <Carousel.Item className='' interval={2000}>
                    <img
                        className="d-block w-100    "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>First slide label</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h4>Second slide label</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} >
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h4>Third slide label</h4>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;