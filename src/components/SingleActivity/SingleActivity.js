import React from 'react';
import './SingleActivity.css'

const SingleActivity = ({product, handleAddToCart}) => {
    const {name, img, time, age, description } = product;


    return (
        <div >
            <div>
                <div className='border-2 w-9/12 h-4/5 m-3 bg-sky-200 rounded-lg ml-14' data-aos="zoom-in-up">
                    <img className='w-5/6 h-64 ml-7 mt-6 rounded-lg img' src={img} alt=""></img>
                    <h3 className='text-left mt-5 ml-8 text-lg font-semibold'> {name}</h3>
                    <h6 className='text-left mt-2 ml-8 pr-4'><small className='text-sm font-semibold'>Description</small> : {description}</h6>
                    <p className='text-left mt-1 ml-8'><small className='text-sm font-semibold'>Age Limit</small>: {age}</p>
                    <p className='text-left mt-1 ml-8 '><small className='text-sm font-semibold'>Time Required</small>: {time} min</p>
                    <button onClick={() => handleAddToCart(product)} type='button' className='bg-orange-600 p-2 border rounded-lg font-bold text-white mt-10 mb-4 w-3/4 text-lg hover:bg-orange-400' >Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleActivity;