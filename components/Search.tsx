import React, { useState } from 'react'
import Input from './Input'
interface Props{
  location:string
  character:string
  episode:string
  setLocation: React.Dispatch<React.SetStateAction<string>>
  setCharacter:React.Dispatch<React.SetStateAction<string>>
  setEpisode:React.Dispatch<React.SetStateAction<string>>

  
}
const Search = ({location, setLocation,character, setCharacter, episode, setEpisode}:Props) => {
  return (
    <>
    <h1 className="text-green-600 text-3xl font-bold text-center">Search</h1>
    <p className="text-center text-lg text-gray-600">Search your favorite characters, locations and Episodes</p>
    <form id="search" className="p-10 flex items-center w-full justify-center gap-3 flex-col lg:flex-row">
      
      <Input type='search' label='Location' value={location} onChange={setLocation} />
      <Input type='search' label='Character' value={character} onChange={setCharacter} />
      <button className="bg-green-600 text-white" onClick={()=>{
        setLocation("")
        setCharacter("")
      }}>Reset</button>
      </form></>

  )
}

export default Search