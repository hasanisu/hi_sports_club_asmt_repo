import React from 'react';

const Activity = (props) => {
    const {activity} = props;

    let time = 0;
    for(const play of activity){
        time = time + play.time;
    }


    return (
        <div>
            <div className='sticky top-0'>
                    <div className='mb-20'>
                        <h2>IMAM MD HASAN</h2>
                    </div>
                    <div className='flex ml-16 justify-center items-center border-2 w-3/4 h-12 bg-slate-200 rounded-lg'>
                        <h3 className='ml-10 mr-6'>75 <span>kg</span></h3>
                        <h3 className='mr-6'>6.5</h3>
                        <h3 className='mr-6'>25 <span>yrs</span></h3>
                    </div>
                    <div>
                        <p>Selected Item: {activity.length}</p>
                        <h4>hello : {activity.time}</h4>
                        <p>Total Time:{time} </p>
                    </div>
                    </div>
                </div>
      
    );
};

export default Activity;