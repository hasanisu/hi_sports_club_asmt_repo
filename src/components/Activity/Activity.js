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
                    



                        <p>Selected Item: {activity.length}</p>
                        <h2>Excersize Detail</h2>
                        <h2 className='mt-36 text-2xl font-bold'>Choose Your Break Time</h2>
                        <div className='flex items-center justify-center space-x-8'>
                        {
                            jikans.map(p=> <BreakTime 
                            key={p.id}
                            btime={p}
                            sports={sports}
                            setSports={setSports}
                            ></BreakTime>)
                        }
                        </div>



                       
                        <div className='flex justify-center items-center ml-16 mt-10 border-2 w-4/5 h-12 bg-slate-200 rounded-lg space-x-32 p-4'>
                            <p>Excersize Time</p>
                            <p>{time} seconds</p>
                        </div>


                        <div className='flex justify-center items-center ml-16 mt-10 border-2 w-4/5 h-12 bg-slate-200 rounded-lg space-x-40 p-4'>
                            <p>Break Time</p>
                            <p>{p} seconds</p>
                           
                        </div>


                    </div>
                    </div>
               
      
    );
};

export default Activity;