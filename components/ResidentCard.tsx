import React from 'react'
import Image from 'next/image'

export interface Resident{

        "name": string,
        "image": string,
        "gender": string,
        "created": string,
        "__typename": string
    }


interface Props {
    resident: Resident
}

const ResidentCard = ({ resident }: Props) => {
    return (
        <div className="flex">
            <div>
                <Image alt="character" width={100} height={100} src={resident.image} />
            </div>
            <div>
                <p>{resident.name}</p>
                <p>{resident.gender}</p>
                <p>{resident.created}</p>

            </div>
        </div>
    )
}

export default ResidentCard