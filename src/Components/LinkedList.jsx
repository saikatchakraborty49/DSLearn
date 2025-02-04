import React, { useState } from 'react'
import toast from 'react-hot-toast'
import LinkedListCard from './LinkedListCard'

const LinkedList = () => {
  const [linkedList,setLinkedList]=useState([])
  const [inputValueInsertAtFront,setInputValueInsertAtFront]=useState("")
  const [inputValueInsertAtEnd,setInputValueInsertAtEnd]=useState("")
  const [addresses,setAddresses]=useState([201,304,407,502,608])
  const maxSize=5

  console.log(linkedList)

  const insertAtFront=(event)=>{
    event.preventDefault();
    if(linkedList.length>=maxSize){
      toast.error(`This website only supports linked list having ${maxSize} elements`)
      setInputValueInsertAtFront("");
      return;
    }
    const nextAddress=linkedList.length==0?null:linkedList[0].address;
    const options={
      value:inputValueInsertAtFront,
      address:addresses[0],
      nextAddress:nextAddress
    }
    setAddresses((prevAddresses)=>prevAddresses.slice(1))
    if (inputValueInsertAtFront.trim() !== "") {
      if (isNaN(inputValueInsertAtFront)) {
        toast.error("Only Integers are allowed in the Integer Queue");
        return;
      }
      setLinkedList((prevLinkedList)=>[options,...prevLinkedList]);
      setInputValueInsertAtFront("");
    }
  }

  const insertAtEnd=(event)=>{
    event.preventDefault();
    if(linkedList.length>=maxSize){
      toast.error(`This website only supports linked list having ${maxSize} elements`)
      setInputValueInsertAtEnd("");
      return;
    }
    
    // const nextAddress=linkedList.length==0?null:addresses[linkedList.length+1];
    const options={
      value:inputValueInsertAtEnd,
      address:addresses[0],
      nextAddress:null
    }
    setAddresses((prevAddresses)=>prevAddresses.slice(1))
    if(linkedList.length!==0){
      linkedList[linkedList.length-1].nextAddress=options.address;
    }
    if (inputValueInsertAtEnd.trim() !== "") {
      if (isNaN(inputValueInsertAtEnd)) {
        toast.error("Only Integers are allowed in the Integer Queue");
        return;
      }
      setLinkedList((prevLinkedList)=>[...prevLinkedList,options]);
      setInputValueInsertAtEnd("");
    }
  }

  const deleteFromFront=(event)=>{
    event.preventDefault();
    if(linkedList.length===0){
      toast.error("Linked List is empty");
      return;
    }
      setAddresses((prevAddresses)=>[...prevAddresses,linkedList[0].address])
      setLinkedList((prevLinkedList)=>prevLinkedList.slice(1))
  }

  const deleteFromEnd=(event)=>{
    event.preventDefault();
    if(linkedList.length===0){
      toast.error("Linked List is empty");
      return;
    }
    setAddresses((prevAddresses)=>[...prevAddresses,linkedList[linkedList.length-1].address])
    
    setLinkedList((prevLinkedList)=>{
      const newLL=prevLinkedList.slice(0,-1);
      if(newLL.length!=0){
        newLL[newLL.length-1].nextAddress=null
      }
      return newLL;
    })
  }

  return (
    <div className='flex justify-center items-center h-[90vh] w-screen'>
      <div className='flex flex-col gap-14'>

      <h1 className="text-6xl">LINKED LIST</h1>

      <div className='h-full w-full flex justify-center items-center'>
        <div className='flex gap-4'>
          {linkedList.map((ele,index)=>(
            <LinkedListCard
            ele={ele}
            index={index}
            size={linkedList.length}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-3'>
      <form onSubmit={insertAtFront}>
        <input
          type="text"
          placeholder="Enter element"
          value={inputValueInsertAtFront}
          onChange={(e) => setInputValueInsertAtFront(e.target.value)}
          className="p-2 text-base mr-2 rounded border border-gray-300"
          />
        <button
          type="submit"
          className="px-3 py-2 text-base bg-black text-white border-none rounded cursor-pointer hover:bg-white hover:text-black"
          >
          Insert At Front
        </button>
      </form>

      <form onSubmit={insertAtEnd}>
        <input
          type="text"
          placeholder="Enter element"
          value={inputValueInsertAtEnd}
          onChange={(e) => setInputValueInsertAtEnd(e.target.value)}
          className="p-2 text-base mr-2 rounded border border-gray-300"
        />
        <button
          type="submit"
          className="px-3 py-2 text-base bg-black text-white border-none rounded cursor-pointer hover:bg-white hover:text-black"
          >
          Insert At End 
        </button>
      </form>

      <form onSubmit={deleteFromFront}>
        <button
          type="submit"
          className="px-3 py-2 text-base bg-black text-white border-none rounded cursor-pointer hover:bg-white hover:text-black"
          >
          Delete From Front
        </button>
      </form>

      <form onSubmit={deleteFromEnd}>       
        <button
          type="submit"
          className="px-3 py-2 text-base bg-black text-white border-none rounded cursor-pointer hover:bg-white hover:text-black"
          >
          Delete From End
        </button>
      </form>
      </div>
          </div>
    </div>
  )
}

export default LinkedList