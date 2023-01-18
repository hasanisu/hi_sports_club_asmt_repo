import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';

const Activity = (props) => {

    const {activity, } = props;
    const [jikans, setJikan] = useState([]);

    let time = 0;
    for(const play of activity){
        time = time + play.time;
    }
 
useEffect(()=>{
    fetch('jikan.json')
    .then(res => res.json())
    .then(data => setJikan(data))
},[])

// for test 
// const datas =[
//     {id: 1, name:'30s', jikan: 20},
//     {id: 2, name:'30s', jikan: 30},
//     {id: 3, name:'30s', jikan: 40},
//     {id: 4, name:'30s', jikan: 50},
// ];


let p = 0;
    for(const min of jikans){
        p = min.jikan;
    }


const addToBreakTime =(btime)=>{
  const newJikan = [...jikans, btime]
    setJikan(newJikan)
}







    return (
        <div>
            <div className='sticky top-0'>
                    



                        <p>Selected Item: {activity.length}</p>
                        <h2>Excersize Detail</h2>
                        <div className='flex items-center justify-center space-x-8'>
                        {
                            jikans.map(p=> <BreakTime 
                            key={p.id}
                            btime={p}
                            addToBreakTime={addToBreakTime}
                            ></BreakTime>)
                        }
                        </div>



                        <div>
                            <p>time: {jikans.id}</p>
                        </div>
                        <div className='flex justify-center items-center ml-16 mt-10 border-2 w-4/5 h-12 bg-slate-200 rounded-lg space-x-32 p-4'>
                            <p>Excersize Time</p>
                            <p>{time} seconds</p>
                        </div>


                        <div className='flex justify-center items-center ml-16 mt-10 border-2 w-4/5 h-12 bg-slate-200 rounded-lg space-x-36 p-4'>
                            <p>Break Time: {p}</p>
                           
                        </div>


                    </div>
                    </div>
               
      
    );
};

export default Activity;