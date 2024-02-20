// components/CharacterList.js
"use client"
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import client from '@/libs/client';
import Image from 'next/image'

const GET_CHARACTERS = gql`
  query Characters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
    }
  }
`;

interface Char {
    name: "string",
    image: string
    id: number

}

function CharacterList() {
    const { loading, error, data } = useQuery(GET_CHARACTERS, { variables: { page: 1 }, client });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data?.characters?.results);


    return (
        <ul>
            {data.characters.results.map((character:Char) => (
                <li key={character.id}>
                    {character.name} - <Image src={character.image} alt={character.name} width={100} height={50} />
                </li>
            ))}
        </ul>
    );
}

export default CharacterList;