import React from 'react'


interface Props {
  note: string
  
  index: number
  AllNotes:string[]
  
} 

const Note = (props:Props) => {





  
  return (
    <div className="w-full px-2 py-3 flex items-center justify-between my-3 shadow-lg rounded-lg">
      <p>{props.note}</p>


    <div className="flex gap-3 items-center">
      
        
    </div>

    </div>
  )
}

export default Note