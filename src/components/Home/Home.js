import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import BreakTime from '../BreakTime/BreakTime';
import SingleActivity from '../SingleActivity/SingleActivity';
import Swal from 'sweetalert2';


const Home = () => {
    const [carts, setCart] = useState([]);
    const [activity, setActivity] = useState([]);
  
    
    

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCart(data))
    } ,[])


    const handleAddToCart= (product) =>{
        console.log(activity);
        const newActivities = [...activity, product];
        setActivity(newActivities);
        Swal.fire(
            'Good job!',
            'You added successfully!',
            'success'
          )
    }



    

    return (
        <div>

            <div className='grid lg:grid-cols-4 sm:grid-cols-1'>

                
                <div className='bg-slate-100 col-span-3'>
                    <h2 className=''>Badminton Sports Club</h2>
                    
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                    {
                        carts.map(product => <SingleActivity
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></SingleActivity> )
                    }
                    </div>

                    
                </div>

                    

                
                <div className='bg-red-200'>

                    
                    <Activity activity={activity}
                    
                    ></Activity>
                </div>
            </div>
        </div>
    );
};

export default Home;