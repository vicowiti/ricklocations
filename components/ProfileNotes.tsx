import React, { useState } from 'react'
import Note from "./Note"
import Input from "./Input"
import { createLocalStorage } from '@/utils/localStorage'
import { Toaster, toast } from 'sonner'

interface Props {
  name: string
  notes: string[]
  id: string
  setStateNotes: React.Dispatch<any>
  stateNotes: string[]
}

const ProfileNotes = (props: Props) => {

  console.log("props.notes", props.notes)

  const [note, setNote] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    await createLocalStorage({
      name: props.name,
      id: props.id,
      note
    })

    setNote("")
    toast.success("Note Added")
    props.setStateNotes([note, ...props.stateNotes])


  }
  return (
    <div>
      <Toaster richColors />
      <div className="mt-5">
        <h3 className="font-bold">{props.name} Notes</h3>
        <div>
          <form onSubmit={e => handleSubmit(e)}>
            <Input required={true} value={note} label="Add a new Note" type="text" onChange={setNote} />
            <button type="submit" className='bg-green-600 text-white font-semibold px-4 rounded-lg py-2 my-2'>Add Note</button>
          </form>
        </div>

        {props.notes.length < 1 && <p className="text center">No Notes Yet!</p>}
        <article>
          {
            props.notes.map(note => <Note note={note} key={note} />)
          }
        </article>
      </div>
    </div>
  )
}

export default ProfileNotes