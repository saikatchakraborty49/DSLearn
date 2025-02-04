import React, { useState } from 'react';
import toast from 'react-hot-toast';
import StackCard from './StackCard';
import { FaArrowDown } from "react-icons/fa";

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [maxLength, setMaxLength] = useState("");
  const [stackSizeInput, setStackSizeInput] = useState("");
  const [remove,setRemove]=useState(false)
  const [add,setAdd]=useState(false)


  const handlePop=(event)=>{
    event.preventDefault();
    if(stack.length===0){
      toast.error("Stack Underflow");
      return;
    }
    setRemove(true);
    setTimeout(() => {
      setStack((prevStack)=>prevStack.slice(1))
      setRemove(false)
    }, 1000);
  }

  const handleStackSizeSubmit = (event) => {
    event.preventDefault();
    const size = parseInt(stackSizeInput, 10);

    if (isNaN(size) || size <= 0) {
      toast.error("Please enter a valid positive integer for the stack size");
      return;
    }
    if(size>10){
      toast.error("Please enter a size between 0 to 10");
      return ;
    }
    setMaxLength(size); // Set the stack size
    setStackSizeInput(""); // Clear the size input field
  };

  const handleAddElementSubmit = (event) => {
    event.preventDefault();

    if (stack.length >= maxLength) {
      toast.error("Stack Overflow");
      setInputValue("");
      return;
    }

    if (inputValue.trim() !== "") {
      if (isNaN(inputValue)) {
        toast.error("Only Integers are allowed in the Integer stack");
        return;
      }

      setStack((prevStack) => [inputValue, ...prevStack]); // Add new element to stack
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
      <h1 className="text-6xl">STACK</h1>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        {!maxLength ? (
          <form onSubmit={handleStackSizeSubmit} className="flex flex-col items-center gap-3">
            <input
              type="text"
              placeholder="Enter stack size"
              value={stackSizeInput}
              onChange={(e) => setStackSizeInput(e.target.value)}
              className="p-2 text-base rounded border border-gray-300"
            />
            <button
              type="submit"
              className="px-3 py-2 text-base bg-black text-white border-none rounded cursor-pointer hover:bg-white hover:text-black"
            >
              Set Stack Size
            </button>
          </form>
        ) : (
          <>
            <div>
              {stack.length !== 0 && (
                <div className="flex flex-col justify-center items-center">
                  <p className="text-2xl">Top</p>
                  <FaArrowDown className="text-3xl" />
                </div>
              )}
              <div className="flex flex-col">
                {stack.map((ele, index) => (
                  <StackCard
                  ele={ele} 
                  index={index} 
                  size={stack.length}
                  remove={remove && index === 0}
                  add={add && index==0}
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
                Push
              </button>
            </form>
            <button
              onClick={handlePop} 
              className="px-3 py-2 text-base bg-black text-white border-none rounded cursor-pointer hover:bg-white hover:text-black"
            >Pop</button>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default Stack;
