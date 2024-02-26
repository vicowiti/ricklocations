import { LocalData } from '@/utils/localStorage';
import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {toast} from "sonner"


interface Props {
  note: string
  
  index: number
  AllNotes:string[]
  setNote:React.Dispatch<React.SetStateAction<string>>
  id: string
  setStateNotes: React.Dispatch<any>
  
} 

const Note = (props:Props) => {


  const deleteNote = (isEdit:boolean) => {

    let data = true
    if(!isEdit){
   data = window.confirm("Do you want to delete the Note?")
    }
    

    if(data){
      const strnotes = localStorage.getItem("notes")
      if(strnotes){
        const notes:LocalData[] = JSON.parse(strnotes)

        // Notes without current obj

        const filteredOut = notes.filter(item => item.id !== props.id)

        // isolate current obj

        const currentObj = notes.find(item => item.id === props.id)

        const newObj = {
          ...currentObj,
          notes: currentObj?.notes.filter(item => item !== props.note)
        }

        localStorage.setItem("notes", JSON.stringify([...filteredOut, newObj]))
        props.setStateNotes(newObj.notes)
        !isEdit && toast.warning("Note deleted")

      }
    }

  }

const editNote = () => {
props.setNote(props.note)
deleteNote(true)
}


  
  return (
    <div className="w-full px-2 py-3 flex items-center justify-between my-3 shadow-lg rounded-lg">
      <p>{props.note}</p>


    <div className="flex gap-3 items-center">
        <FaEdit  size={20} className="hover:scale-110 duration-300" onClick={editNote}/>

        <MdDelete color="red" size={20} className="hover:scale-110 duration-300" onClick={() => deleteNote(false)}/>
        
    </div>

    </div>
  )
}

export default Note