import React from 'react';

const BreakTime = ({btime, addToBreakTime}) => {
    const {jikan, id} = btime;



    return (
        <div>
            <div>
                <button onClick={() => addToBreakTime(btime)}>{jikan}</button>
            </div>


        </div>
    );
};

export default BreakTime;