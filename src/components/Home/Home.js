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

                    <div className='flex mt-36 ml-14'>
                        <img className='w-14 border rounded-3xl' src="https://t3.ftcdn.net/jpg/00/54/89/08/360_F_54890802_j6XIBBYEpMf9D5mTZsSrqmXmJCtT3X0d.jpg" alt="" />
                        <h2 className='text-left ml-3 mt-2 text-orange-600 text-3xl font-semibold'>HI-SPORTS-CLUB</h2>
                    </div>

                    <h2 className='mt-10 text-left ml-14 mb-12 text-2xl'>Badminton Sports Club</h2>
                    
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                    {
                        carts.map(product => <SingleActivity
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></SingleActivity> )
                    }
                    </div>

                    <div className='mt-40 mb-20 ml-14'>
                        <h2 className='text-3xl font-bold mb-14 text-orange-600' data-aos="flip-left">......Customer Feedback......</h2>
                    
                        <div className='justify-center gap-8 grid sm:grid-cols-1 lg:grid-cols-3'>

                        <div className='border rounded-l-3xl w-10/12 bg-green-400 p-4 text-left' data-aos="fade-down-right">
                            <h2 className='mb-4 text-xl'>Q: How does react work?</h2>
                            <p>ReactJS divides the UI into isolated reusable pieces of code known as 
                                components. React components work similarly to JavaScript functions 
                                as they accept arbitrary inputs called properties or props. 
                                It's possible to have as many components as necessary without 
                                cluttering your code</p>
                        </div>
                        <div className='border rounded w-10/12 bg-red-400 p-3 text-left' data-aos="fade-down">
                            <h2 className='mb-4 text-xl'>Q: various use of useEffect without data load?</h2>
                            <p>The useEffect manages an array that contains the state variables or 
                                functions which are kept an eye for any changes. These changes then 
                                trigger the callback function.</p>
                        </div>
                        <div className='border rounded-r-3xl w-10/12 bg-green-400 p-4 text-left ' data-aos="fade-down-left">
                            <h2 className='mb-4 text-xl'>Q: Difference between props and state in react?</h2>
                            <p>State is the local state of the component which cannot be accessed 
                                and modified outside of the component. It's equivalent to local 
                                variables in a function. Props, on the other hand, make components 
                                reusable by giving components the ability to receive data from their 
                                parent component in the form of props.</p>
                        </div>
                        </div>
                    </div>

                    
                </div>

                <div className='bg-red-200 w-full sm:w-auto'>
                    <Activity activity={activity} ></Activity>
                </div>

            </div>

        </div>
    );
};

export default Home;