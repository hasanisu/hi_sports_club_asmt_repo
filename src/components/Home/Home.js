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

                
                <div className='col-span-2'>
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



                
                <div>
                    <h2>Customer Profile</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;