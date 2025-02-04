import React from 'react'

const LinkedListCard = (props) => {
    const {ele,index,size}=props
    const value=ele.value
    const address=ele.address
    const nextAddress=ele.nextAddress
  return (
    <div>
        <div className='flex justify-center items-center'>
            <div className='border-2 border-black flex text-xl justify-center'>
                <div className='border-r-2 border-gray-500 p-2'>{value}</div>
                {nextAddress?<div className='p-2 flex justify-start'>{nextAddress}</div>:<div className='p-2'>Null</div>}
            </div>
            {index!==size-1?
            <div className='h-full w-full text-5xl flex items-center'>
              &rarr;
            </div>:
            <></>}            
        </div>
        <div className='flex justify-start ml-2'>{address}</div>
    </div>
  )
}

export default LinkedListCard