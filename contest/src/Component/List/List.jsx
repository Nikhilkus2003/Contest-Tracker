import React from 'react'
import { GetDate } from '../../assets/GetDate.js';
import { GetTime } from '../../assets/GetTime.js';

function List({contests}) {
    console.log(contests)
    if(contests.length>0)console.log(GetTime(contests[1].startTimeSeconds));
  return (
    <>
        <div>
            <div className="flex row-wrap space-around">
                <div>Name</div>
                <div>Date</div>
                <div>Time</div>
            </div>
        </div>
    </>
  )
}

export default List