// components/CharacterList.js
"use client"
import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import client from '@/libs/client';
import Pagination from "./Pagination"
import ResidentCard from './ResidentCard';
import { Resident } from './ResidentCard';
import { FaLocationDot } from "react-icons/fa6";


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

  console.log("currentData", data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;




  return (
    <div>

      <article className="flex items-center w-full justify-between p-10 gap-4">
        <div>
          <h3 className="text-8xl font-semibold">{data?.character?.name}</h3>
          <h3 className="text-2xl font-semibold">{data?.character?.status}</h3>
          <h3 className="text-2xl font-semibold">{data?.character?.species}</h3>
          <h3 className="text-2xl font-semibold">{data?.character?.gender}</h3>
        </div>
        <div>
          <img src={data?.character?.image} />
        </div>

      </article>

      <div className="w-full grid grid-cols-3">
        <div>
          <h6>Origin</h6>
          <p>{data?.character?.origin?.name}</p>
        </div>
        <div>
          <h6>Dimension</h6>
          <p>{data?.character?.origin?.dimension}</p>
        </div>
        <div>
          <h6>Location</h6>
          <p>{data?.character?.location?.name}</p>
        </div>

      </div>

    </div>
  );
}

export default ProfileInfo;