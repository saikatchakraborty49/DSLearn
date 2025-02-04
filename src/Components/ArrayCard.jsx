import React from 'react'

const ArrayCard = (props) => {
    const ele=props.ele;
    const index=props.index;
    const result=props.result;
    const indexToFind=props.indexToFind;
    // console.log("index:"+indexForAccessing)
  return (
    <div>
        <div className={indexToFind===index && result?'min-w-[100px] h-[100px] border-black border-2 blink flex justify-center items-center text-lg	'
          :'text-lg min-w-[100px] h-[100px] border-black border-2 bg-yellow-500 flex justify-center items-center'}>{ele}</div>
        <div className='min-w-[100px] h-[40px] flex justify-center items-center'>{index}</div>
    </div>
  )
}

export default ArrayCard