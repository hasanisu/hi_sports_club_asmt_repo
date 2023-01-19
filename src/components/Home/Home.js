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
            'Added!',
            'You added successfully!',
            'success'
          )
    }



    

    return (
        <div>
            
            <div className='grid lg:grid-cols-4 sm:grid-cols-1'>
                
                
                <div className='bg-slate-100 col-span-3'>
                    <div className='flex mt-36 ml-10'>
                        <img className='w-14 border rounded-3xl' src="https://t3.ftcdn.net/jpg/00/54/89/08/360_F_54890802_j6XIBBYEpMf9D5mTZsSrqmXmJCtT3X0d.jpg" alt="" />
                        <h2 className='text-left ml-3 mt-2 text-orange-600 text-3xl font-semibold'>HI-SPORTS-CLUB</h2>
                    </div>
                    <h2 className='mt-10 text-left ml-10 mb-12 text-2xl'>Badminton Sports Club</h2>
                    
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

                    

                
                <div className='bg-red-200 sticky top-0'>

                    
                    <Activity activity={activity}
                    
                    ></Activity>
                </div>
            </div>
        </div>
    );
};

export default Home;