// components/CharacterList.js
"use client"
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import client from '@/libs/client';
import Pagination from "./Pagination"
import ResidentCard from './ResidentCard';
import { Resident } from './ResidentCard';


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
        name
        image
        gender
        created
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
  const { loading, error, data } = useQuery(GET_LOCATIONS, { variables: { page: 2 }, client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;




  return (
    <div>
      <ul>
        {data?.locations.results?.map((location: Char) => (
        <li key={location.id}>
          {location.name}
            <h2>Residents</h2>
            <div>
              {location?.residents?.map(resident => <ResidentCard resident={resident} key={resident.image} />)}
            </div>
        </li>

     
        ))}
      </ul>

      <Pagination />
    </div>
  );
}

export default LocationsList;