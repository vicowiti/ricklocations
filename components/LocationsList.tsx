// components/CharacterList.js
"use client"
import React, {useState} from 'react';
import { gql, useQuery } from '@apollo/client';
import client from '@/libs/client';
import Pagination from "./Pagination"
import ResidentCard from './ResidentCard';
import { Resident } from './ResidentCard';
import { FaLocationDot } from "react-icons/fa6";


const GET_LOCATIONS = gql`
  query Locations($page: Int!) {
  locations(page: $page) {
    info{
      count
    }
    results {
      id
      name
      type
      dimension
      residents{
        id
        name
        image
        gender
        created
        status
      }
     
    }
  }
}
`;





interface Char {
  name: "string",
  image: string
  id: number
  residents: Resident []

}

function LocationsList() {
   const [currentPage, setCurrentPage] = useState(1)
   console.log("currentPage", currentPage)
  const { loading, error, data } = useQuery(GET_LOCATIONS, { variables: { page: currentPage }, client });

  

  if (loading) return <p className='text-center font-bold'>Loading...</p>;
  if (error) return <p className='text-center font-bold text-red-600'>Error: {error.message}</p>;




  return (
    <div>
      <ul >
        {data?.locations.results?.map((location: Char) => (
        <li key={location.id}>
            <h3 className="text-2xl font-semibold flex items-center gap-3"><FaLocationDot color="green" />{location.name}</h3>
            <h2>Residents</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {location?.residents?.map(resident => <ResidentCard resident={resident} key={resident.image} />)}
            </div>
        </li>

     
        ))}
      </ul>

      <Pagination currentPage={currentPage} total={data?.locations?.info?.count} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default LocationsList;