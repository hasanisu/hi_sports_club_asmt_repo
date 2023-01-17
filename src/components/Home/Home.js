import React, { useEffect, useState } from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';

const Home = () => {
    const [carts, setCart] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCart(data))
    } ,[])

console.log(carts);

    return (
        <div>
            <h2>Welcome to sports club</h2>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>

                
                <div className='bg-slate-100 col-span-2'>
                    <h2 className=''>Badminton Sports Club</h2>
                    
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                    {
                        carts.map(activity => <SingleActivity
                        key={activity.id}
                        activity={activity}
                        ></SingleActivity> )
                    }
                    </div>

                    
                </div>



                
                <div className='bg-red-200'>
                    <div className='mb-20'>
                        <h2>IMAM MD HASAN</h2>
                    </div>
                    <div className='flex ml-16 justify-center items-center border-2 w-3/4 h-12 bg-slate-200 rounded-lg'>
                        <h3 className='ml-10 mr-6'>75 <span>kg</span></h3>
                        <h3 className='mr-6'>6.5</h3>
                        <h3 className='mr-6'>25 <span>yrs</span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;