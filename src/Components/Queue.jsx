import React, { useState } from 'react';
import toast from 'react-hot-toast';
import QueueCard from './QueueCard';
import { FaArrowDown } from "react-icons/fa";

const Queue = () => {
  const [queue,setQueue]=useState([])
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [maxLength, setMaxLength] = useState("");
  const [queueSizeInput, setQueueSizeInput] = useState("");
  const [remove,setRemove]=useState(false)
  const [add,setAdd]=useState(false)
  const [peek,setPeek]=useState(false)

  
  const handlePop=(event)=>{
    event.preventDefault();
    if(queue.length===0){
      toast.error("Queue Underflow");
      return;
    }
    setRemove(true);
    setTimeout(() => {
      setQueue((prevQueue)=>prevQueue.slice(1))
      setRemove(false)
    }, 1000);
  }

  const handleQueueSizeSubmit = (event) => {
    event.preventDefault();
    const size = parseInt(queueSizeInput, 10);

    if (isNaN(size) || size <= 0) {
      toast.error("Please enter a valid positive integer for the Queue size");
      return;
    }
    if(size>10){
      toast.error("Please enter a size between 0 to 10");
      return ;
    }
    setMaxLength(size);
    setQueueSizeInput("");
  };

  const handleAddElementSubmit = (event) => {
    event.preventDefault();

    if (queue.length >= maxLength) {
      toast.error("Queue Overflow");
      setInputValue("");
      return;
    }

    if (inputValue.trim() !== "") {
      if (isNaN(inputValue)) {
        toast.error("Only Integers are allowed in the Integer Queue");
        return;
      }

      setQueue((prevQueue) => [...prevQueue,inputValue]); // Add new element to Queue
      setAdd(true);
      setTimeout(() => {
        setAdd(false);
      }, 1000);
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div className='flex justify-center items-center h-[90vh] w-screen'>
      <div className='flex flex-col gap-y-14'>
      <h1 className="text-6xl">QUEUE</h1>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        {!maxLength ? (
          <form onSubmit={handleQueueSizeSubmit} className="flex flex-col items-center gap-3">
            <input
              type="text"
              placeholder="Enter Queue size"
              value={queueSizeInput}
              onChange={(e) => setQueueSizeInput(e.target.value)}
              className="p-2 text-base rounded border border-gray-300"
            />
            <button
              type="submit"
              className="px-3 py-2 text-base bg-black text-white border-none rounded cursor-pointer hover:bg-white hover:text-black"
            >
              Set Queue Size
            </button>
          </form>
        ) : (
          <>
            <div>
              {queue.length !== 0 && (
                <div className="w-full flex justify-between">
                  <div className='flex flex-col justify-center items-center'>
                    <p className="text-2xl">Front</p>
                    <FaArrowDown className="text-3xl" />
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <p className="text-2xl">Rear</p>
                    <FaArrowDown className="text-3xl" />
                  </div>
                </div>
              )}
              <div className="flex flex-row">
                {queue.map((ele, index) => (
                  <QueueCard
                  ele={ele} 
                  index={index} 
                  size={queue.length}
                  remove={remove && index === 0}
                  add={add && index==queue.length-1}
                  peek={peek && index==0}
                  />
                ))}
              </div>
            </div>
            <form onSubmit={handleAddElementSubmit}>
              <input
                type="text"
                placeholder="Enter element"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="p-2 text-base mr-2 rounded border border-gray-300"
              />
              <button
                type="submit"
                className="px-3 py-2 text-base bg-black text-white border-none rounded cursor-pointer hover:bg-white hover:text-black"
              >
                Enqueue
              </button>
            </form>
            <button
              onClick={handlePop} 
              className="px-3 py-2 text-base bg-black text-white border-none rounded cursor-pointer hover:bg-white hover:text-black"
            >Dequeue</button>
            
            <div className='flex gap-1 justify-center items-center'>
              <button
                onClick={()=>{
                  if(queue.length==0){
                    toast.error("Queue is empty")
                    return ;
                  }
                  setPeek(true);
                  setTimeout(() => {
                    setPeek(false)
                  }, 5000);
                }}
                className="px-3 py-2 text-base bg-black text-white border-none rounded cursor-pointer hover:bg-white hover:text-black"
                >
                Peek
              </button>
              {peek && <p>Peek: {queue[0]}</p>}
            </div>
          </>
        )}
      </div>
      </div>
    </div>
  )
}

export default Queue