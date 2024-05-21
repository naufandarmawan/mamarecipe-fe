import React from 'react'

const Button = ({text = "Button", className, ...props}) => {
  return (
    <button {...props} className={`btn bg-[#EFC81A] text-white w-full hover:bg-yellow-500 ${className}`}>{text}</button>
  )
}

export default Button