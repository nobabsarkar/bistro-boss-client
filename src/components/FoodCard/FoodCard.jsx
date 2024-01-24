import React from 'react';

const FoodCard = ({ item }) => {
    const { image, name, price, category, recipe } = item
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <p className='absolute right-0 mr-4 mt-4 bg-slate-900 text-white'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end ">
                    <button className="bg-slate-200 border-orange-400 btn btn-outline border-0 border-b-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;