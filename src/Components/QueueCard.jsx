import React from 'react'
import "./QueueCard.css"
import { useState,useEffect } from 'react';

const QueueCard = (props) => {
    const ele=props.ele;
    const index=props.index;
    const length=props.size;
    const remove=props.remove;
    const add=props.add;
    const [animateAdd, setAnimateAdd] = useState(false);
    const [animateRemove,setAnimateRemove] = useState(false);
    const peek=props.peek;

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
            <div className={`min-w-[100px] min-h-[40px] border-black border-2 ${index==0?'border-l-0':'border-l-2'} ${index==length-1?'border-r-0':'border-r-2'}  bg-yellow-500 flex justify-center items-center text-lg 
                ${animateAdd ? 'animateQueueAdd' : ''} ${peek?'blink':''} ${animateRemove ? 'animateQueueRemove' : ''}`}>{ele}</div>
        </div>
  )
}

export default QueueCard