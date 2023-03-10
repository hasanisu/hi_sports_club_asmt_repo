import React from 'react';
import './BreakTime.css'


const BreakTime = ({btime, sports, setSports}) => {
    const {jikan, id} = btime;



    const addToBreakTime =()=>{
        const info={
            jikan,
            id,
            bookmark: "true"
        }
        const newInfo= [info]
        setSports(newInfo);


        const isExist = localStorage.getItem('bookmark');
        const isBookmark = JSON.parse(isExist);
        
        if(isBookmark){
            const isExist=isBookmark.find((p)=> p.id === id);
            
            if(isExist){
                const updateTime = isExist.jikan;
                isExist.jikan= updateTime;
                localStorage.setItem('bookmark', JSON.stringify(isBookmark));
                return;
            }
            else{

                localStorage.setItem('bookmark', JSON.stringify([...isBookmark, info]));
            }

        }
        else{
            localStorage.setItem('bookmark', JSON.stringify([info]));
            
        }
    }
    

    return (
        <div>
            
            <div className='mb-4' data-aos="zoom-out-left">
                <button onClick={() => addToBreakTime(btime)} className='bg-orange-600 p-2 px-3 border rounded-lg font-bold text-white mt-20 text-lg hover:bg-orange-400 btn-break'>{jikan}s</button>
            </div>


        </div>
    );
    
};

export default BreakTime;