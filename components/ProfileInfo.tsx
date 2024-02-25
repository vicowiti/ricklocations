// components/CharacterList.js
"use client"
import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import client from '@/libs/client';
import Pagination from "./Pagination"
import ResidentCard from './ResidentCard';
import { Resident } from './ResidentCard';
import { FaLocationDot } from "react-icons/fa6";
import ProfileNotes from './ProfileNotes';
import { getNotes } from '@/utils/localStorage';


const GET_CHARACTER = gql`
  query GetCharacterById($id: ID!) {
  character(id: $id) {
    id
    name
    status
    species
    gender
    image
    
    origin {
      name
      dimension
      type
      
    }
    location {
      name
      
    }
    episode {
      name
      episode
      air_date
    
    }
  }
}

`;





interface Char {
  name: "string",
  image: string
  id: number
  residents: Resident[]

}

interface Props {
  id: string
}

function ProfileInfo(props: Props) {

  const { loading, error, data } = useQuery(GET_CHARACTER, { variables: { id: props.id }, client });
  const charNotes = getNotes(props.id)

  const [stateNotes, setStateNotes] = useState(charNotes)

  if (loading) return <p className="text-center font-bold">Loading...</p>;
  if (error) return <p className="text-center font-bold">Error: {error.message}</p>;

  return (
    <div>
      <article className="flex flex-col lg:flex-row flex-reverse items-center w-full justify-between lg:justify-between p-10 gap-4">
        <div>
          <h3 className="text-5xl font-semibold text-center lg:text-left">{data?.character?.name}</h3>
          <h3 className="text-2xl font-mono text-center lg:text-left">Status: {data?.character?.status}</h3>
          <h3 className="text-2xl font-mono text-center lg:text-left">Species: {data?.character?.species}</h3>
          <h3 className="text-2xl font-mono text-center lg:text-left">Gender:{data?.character?.gender}</h3>
        </div>
        <div>
          <img src={data?.character?.image} className="rounded-md" />
        </div>

      </article>

      <div className="w-full grid grid-cols-3 lg:gap-3 gap-1">
        <div className="rounded-xl lg:p-7 border-2 bg-gradient from:green-600 to:black shadow-lg">
          <h6 className="font-bold text-center lg:text-xl">Origin</h6>
          <p className='text-center text-wrap text-sm'>{data?.character?.origin?.name}</p>
        </div>
        <div className="rounded-xl lg:p-7 border-2 bg-gradient from:green-600 to:black shadow-lg">
          <h6 className="font-bold text-center lg:text-xl">Dimension</h6>
          <p className='text-center text-wrap text-sm'>{data?.character?.origin?.dimension}</p>
        </div>
        <div className="rounded-xl lg:p-7 border-2 bg-gradient from-green-600 to-black shadow-lg">
          <h6 className="font-bold text-center lg:text-xl">Location</h6>
          <p className='text-center text- text-sm'>{data?.character?.location?.name}</p>
        </div>

      </div>
      <ProfileNotes name={data?.character?.name} stateNotes={stateNotes} setStateNotes={setStateNotes} notes={stateNotes} id={props.id} />
    </div>
  );
}

export default ProfileInfo;