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
            <div>
                <button onClick={() => addToBreakTime(btime)} className='bg-orange-600 p-2 px-3 border rounded-lg font-bold text-white mt-20 text-lg hover:bg-orange-400'>{jikan}</button>
            </div>


        </div>
    );
    
};

export default BreakTime;