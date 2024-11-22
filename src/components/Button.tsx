import React from 'react'
import { twMerge } from 'tailwind-merge'

type Prop ={
    text:string,
    className?:string
}
const Button = ({text, className}:Prop) => {
  return (
    <button className={twMerge('px-8 h-10 rounded-lg text-xs font-semibold', className)}>
      {text}
    </button>
  )
}

export default Button
