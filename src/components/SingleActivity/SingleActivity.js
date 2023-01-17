import React from 'react';
import './SingleActivity.css'

const SingleActivity = ({product, handleAddToCart}) => {
    const {id, category, img, time} = product;


    return (
        <div >
            <div>
                <div className='border-2 w-9/12 h-96 m-3 activity bg-sky-200 rounded-lg ml-10'>
                    <img className='w-3/4 h-64 ml-10 mt-12 rounded-lg img' src={img} alt=""></img>
                    <h3>Id Name: {id}</h3>
                    <h6>Category : {category}</h6>
                    <p>Time: {time}</p>
                    <button onClick={() => handleAddToCart(product)} type='button' className='bg-orange-600 p-2 border rounded-lg font-bold text-white mt-20 w-3/4 text-lg hover:bg-orange-400' >Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleActivity;