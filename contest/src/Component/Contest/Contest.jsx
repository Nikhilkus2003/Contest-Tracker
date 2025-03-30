import React from 'react'
import fun from '../../assets/smaplelist.js'
import { useState,useEffect } from 'react';
import { GetDate } from '../../assets/GetDate.js';
import { GetTime } from '../../assets/GetTime.js';
import List from '../List/List.jsx';

function Contest() {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        (async () => {
          const filteredData = await fun(); 
          setContests(filteredData); 
        })(); 
      }, []);
  return (
    <>
        <div></div>
        <List 
        contests={contests}/>
    </>
  )
}

export default Contest