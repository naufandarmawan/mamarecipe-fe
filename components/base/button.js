import React from 'react'

const Button = ({text = "Button", ...props}) => {
  return (
    <button {...props} className="btn bg-[#EFC81A] text-white w-full hover:bg-yellow-500">{text}</button>
  )
}

export default Button