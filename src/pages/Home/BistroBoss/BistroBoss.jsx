import React from 'react';
import bistroBoss from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className='relative mb-16'>
            <img src={bistroBoss} alt="" />
            <div className=' bg-white absolute sm:p-2 sm:top-6 lg:top-20 md:top-10 left-40 w-2/3 lg:p-20 md:p-5 text-center hidden lg:block md:block sm:block'>
                <h1 className='lg:text-4xl md:text-2xl mb-2'>Bistro Boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BistroBoss;