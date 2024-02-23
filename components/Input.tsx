import React from 'react'

interface Props {
    label: string
    type: string
    value: string
    onChange: React.Dispatch<React.SetStateAction<string>>
}
const Input = (props:Props) => {
  return (
      <div>
          <label htmlFor='Location'>{props.label}</label>
          <input type={props.type} value={props.value} onChange={e => props.onChange(e.target.value)} />
      </div>
  )
}

export default Input