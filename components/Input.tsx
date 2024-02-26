import React from 'react'

interface Props {
    label: string
    type: string
    value: string
    onChange: React.Dispatch<React.SetStateAction<string>>
    required?: boolean
    placeholder: string
}
const Input = (props:Props) => {
  return (
      <div className="flex flex-col my-3">
          <label htmlFor='Location'>{props.label}</label>
          <input placeholder={props.placeholder} required={props.required} type={props.type} value={props.value} onChange={e => props.onChange(e.target.value)}  className=" p-3 lg:p-5 border-2  border-gray-300  rounded-lg"/>
      </div>
  )
}

export default Input