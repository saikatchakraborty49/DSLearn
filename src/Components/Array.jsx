import React, { useState } from 'react'
import ArrayCard from './ArrayCard'
import toast from 'react-hot-toast';

const Array = () => {
  const [array,setArray]=useState([])
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [indexForAccessing, setIndex] = useState("");
  const [result, setResult] = useState("");
  const [indexToFind,setIndexToFind]=useState();

  const handleAccessElementSubmit = (event) => {
    event.preventDefault();
    const idx = parseInt(indexForAccessing, 10);

    // Check if index is valid
    if (!isNaN(idx) && idx >= 0 && idx < array.length) {
      setResult(`Element at index ${idx}: ${array[idx]}`);
      setIndexToFind(idx);
    } else {
      toast.error(`Enter index number within range 0 to ${array.length-1}`)
    }
    setTimeout(() => {
      setResult("")
    }, 5000);
    setIndex(""); // Clear input
  };

  const handleAddElementSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      if(isNaN(inputValue)){
        toast.error("Only Integers are allowed in Integer array")
        return ;
      }
      setArray((prevArray) => [...prevArray, inputValue]); // Add new element to array
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div className='flex justify-center items-center h-[90vh] w-screen'>
      <div className='flex flex-col gap-y-14'>
    <h1 className='text-6xl'>ARRAY</h1>
    <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
      <div className='flex'>
        {array.map((ele,index)=>(
          <ArrayCard
          ele={ele}
          index={index}
          indexToFind={indexToFind}
          result={result}
          />
        ))}
      </div>
      {array.length<=9?
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
          Add
        </button>
      </form>:<div></div>
      }
      {array.length>0?
      <form onSubmit={handleAccessElementSubmit}>
        <input
          className="p-2 text-base mr-2 rounded border border-gray-300"
          type="number"
          placeholder="Enter index"
          value={indexForAccessing}
          onChange={(e) => setIndex(e.target.value)}
        />
        <button
          className="px-3 py-2 text-base bg-black text-white border-none rounded cursor-pointer hover:bg-white hover:text-black"
          type="submit">Find Element</button>
        {result && <p>{result}</p>}
      </form>:<div></div>}
    </div>
    </div>
    </div>
  )
}

export default Array