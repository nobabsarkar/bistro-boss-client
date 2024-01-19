import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle 
                heading={"Featured Item"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className='md:flex items-center bg-slate-500 bg-opacity-50 justify-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus magnam id dolor distinctio molestiae ipsa hic. Et velit architecto explicabo tempora repellendus dolorem labore eligendi reprehenderit maxime sapiente harum veritatis, tenetur incidunt praesentium tempore! Quis aut perspiciatis impedit? Impedit ducimus molestias nostrum exercitationem accusantium, sapiente tempore sint ratione eaque. Voluptates?</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;