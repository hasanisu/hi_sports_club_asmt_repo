import React from 'react';

const BreakTime = ({btime, sports, setSports}) => {
    const {jikan, id} = btime;



    // let p = 0;
    // for(const min of jikans){
    //     p = min.jikan;
    // }
    // console.log(p);

   
    
    const addToBreakTime =()=>{
        const info={
            jikan,
            id
        }
        const newInfo= [info]
        setSports(newInfo);
        console.log(newInfo)
   
    }


    return (
        <div>
            <div>
                <button onClick={() => addToBreakTime(btime)}>{jikan}</button>
            </div>


        </div>
    );
};

export default BreakTime;