import React from 'react';
import './SingleActivity.css'

const SingleActivity = ({activity}) => {
    const {id, catagory, img, price} = activity;
    return (
        <div >
            <div>
                <div className='border-2 w-7/12 h-96 m-5 activity bg-sky-200 rounded-lg'>
                    <img className='w-3/4 h-72 ml-12 mt-12 rounded-lg img' src={img} alt=""></img>
                    <h3>Id Name: {id}</h3>
                    <h6>Catagory : {catagory}</h6>
                </div>
            </div>
        </div>
    );
};

export default SingleActivity;