import React from 'react'
import { ImCancelCircle } from "react-icons/im";

interface Props {
  note: string
} 

const Note = (props:Props) => {
  return (
    <div className="w-full px-2 py-3 flex items-center justify-between my-3 shadow-lg rounded-lg">
      <p>{props.note}</p>


    <ImCancelCircle color="red" />

    </div>
  )
}

export default Note