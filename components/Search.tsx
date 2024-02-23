import React, { useState } from 'react'
import Input from './Input'

const Search = () => {
  const [location, setLocation] = useState("")
  const [character, setCharacter] = useState("")
  const [episode, setEpisode] = useState("")

  return (
    <form>
      <Input type='text' label='Location' value={location} onChange={setLocation} />
      <Input type='text' label='Character' value={character} onChange={setCharacter} />
      <Input type='text' label='Location' value={episode} onChange={setEpisode} />
    </form>
  )
}

export default Search