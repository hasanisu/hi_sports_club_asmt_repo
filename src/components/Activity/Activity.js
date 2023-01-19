import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';

    const Activity = (props) => {

    const {activity} = props;
    const [jikans, setJikan] = useState([]);
    const [sports, setSports]= useState([]);

    let time = 0;
    for(const play of activity){
        time = time + play.time;
    }
 
    useEffect(()=>{
    fetch('jikan.json')
    .then(res => res.json())
    .then(data => setJikan(data))
    },[]);

let p = 0;
    for(const min of sports){
        p = min.jikan;
    }
    console.log(p);

    




    return (
        <div className='sticky top-0'>
            <div>
                    
                <div className='flex mb-18'>
                    <img className='w-16 broder rounded-full py-2 ml-8 ' src="https://www.shutterstock.com/image-vector/vector-sport-club-sports-ball-600w-619454717.jpg" alt=""></img>
                    <div>
                    <h2 className='ml-4 mt-3 text-xl font-bold'>IMAM MD HASAN</h2>
                    <p className='text-left ml-4'>Tokyo, Japan</p>
                    </div>
                </div>

                <div className='flex justify-center items-center ml-9 mt-10 border-2 w-4/5 h-20 bg-slate-200 rounded-lg space-x-16 p-4'>
                    <div>
                        <h2 className='text-xl font-bold'>75<small>kg</small></h2>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>5.6</h2>
                        <p>Height</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>31<small>yrs</small></h2>
                        <p>Weight</p>
                    </div>
                </div>


                        {/* <p>Selected Item: {activity.length}</p>
                        <h2>Excersize Detail</h2> */}
                        <h2 className='mt-24 text-xl font-bold text-left ml-10'>Add A Break</h2>
                        <div className='flex items-center justify-center space-x-8 ml-9 mt-6 mb-20 border-2 w-4/5 h-20 bg-slate-200 rounded-lg p-4'>
                        {
                            jikans.map(p=> <BreakTime 
                            key={p.id}
                            btime={p}
                            sports={sports}
                            setSports={setSports}
                            ></BreakTime>)
                        }
                        </div>


                        <h2 className='mt-10 text-left text-xl font-bold ml-10'>Excercise Details</h2>
                       
                        <div className='flex justify-center items-center ml-9 mt-6 border-2 w-4/5 h-12 bg-slate-200 rounded-lg space-x-32 p-4'>
                            <p>Excersize Time</p>
                            <p>{time} seconds</p>
                        </div>


                        <div className='flex justify-center items-center ml-9 mt-6 border-2 w-4/5 h-12 bg-slate-200 rounded-lg space-x-40 p-4'>
                            <p>Break Time</p>
                            <p>{p} seconds</p>
                           
                        </div>


                    </div>
                    </div>
               
      
    );
};

export default Activity;