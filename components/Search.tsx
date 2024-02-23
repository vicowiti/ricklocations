import React, { useState } from 'react'
import Input from './Input'

const Search = () => {
  const [location, setLocation] = useState("")
  const [character, setCharacter] = useState("")
  const [episode, setEpisode] = useState("")

  return (
    <>
    <h1 className="text-green-600 text-3xl font-bold text-center">Search</h1>
    <p className="text-center text-lg text-gray-600">Search your favorite characters, locations and Episodes</p>
    <form id="search" className="p-10 flex items-center w-full justify-center gap-3 flex-col lg:flex-row">
      
      <Input type='text' label='Location' value={location} onChange={setLocation} />
      <Input type='text' label='Character' value={character} onChange={setCharacter} />
      <Input type='text' label='Episode' value={episode} onChange={setEpisode} />
      </form></>

  )
}

export default Search