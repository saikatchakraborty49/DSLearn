import React from 'react'
import "./StackCard.css"
import { useState,useEffect } from 'react';

const StackCard = (props) => {
    const ele=props.ele;
    const index=props.index;
    const length=props.size;
    const remove=props.remove;
    const add=props.add;
    const [animateAdd, setAnimateAdd] = useState(false);
    const [animateRemove,setAnimateRemove] = useState(false)
  
    useEffect(() => {
      if (add) {
        setAnimateAdd(true);
        setTimeout(() => setAnimateAdd(false), 1000);
      }
    }, [add]);

    useEffect(() => {
      if(remove){
        setAnimateRemove(true);
        setTimeout(() => setAnimateRemove(false), 1000);
      }
    }, [remove]);
    
    return (
        <div>
            <div className={`min-w-[100px] min-h-[40px] border-black ${index==0?'border-b-2 border-x-2':'border-2'}  bg-yellow-500 flex justify-center items-center text-lg 
                ${animateAdd ? 'animateStackAdd' : ''} ${animateRemove ? 'animateStackRemove' : ''}`}>{ele}</div>
        </div>
    )
}

export default StackCard