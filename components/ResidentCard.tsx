import React from 'react'
import Image from 'next/image'
import { RxAvatar } from "react-icons/rx";
import { MdDateRange } from "react-icons/md";
import {PiGenderIntersexFill} from "react-icons/pi"
import Link from 'next/link';
import { IoIosBatteryDead, IoIosBatteryFull } from "react-icons/io";
import { timeConverter } from './../utils/timeConverter';

export interface Resident{

        name: string,
        image: string,
        gender: string,
        created: string,
        __typename: string,
        id: string
        status: string
    }


interface Props {
    resident: Resident
}

const ResidentCard = ({ resident }: Props) => {
    return (
        <Link href={`${resident.id}`}>
        <div className="flex items-center cursor-pointer hover:scale:105 duration-300 gap-3 my-5 rounded-xl shadow-xl p-5 bg-[#fbfbfb]">
            <div>
                <Image alt="character" width={100} height={100} src={resident.image} />
            </div>
            <div>
                <p className="flex items-center gap-4"> <RxAvatar color="green"/> {resident.name}</p>
                <p className="flex items-center gap-4"> <PiGenderIntersexFill color="green"/> {resident.gender}</p>
                <p className="flex items-center gap-4 text-sm"><MdDateRange color="green"/> {timeConverter(resident.created)}</p>
                <p className="flex items-center gap-4">{resident.status.toLowerCase() === "dead" ? <IoIosBatteryDead  color="green"/> : <IoIosBatteryFull  color="green"/>} {resident.status}</p>

            </div>
        </div>
        </Link>
    )
}

export default ResidentCard