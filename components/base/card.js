import React from 'react'

const Card = ({image = `url('/recipe-thumbnail.png')`, title = 'Title', ...props}) => {
    return (
        <div {...props} className='w-full h-64 flex flex-col justify-end items-start p-6 rounded-xl bg-cover cursor-pointer' style={{
            backgroundImage: image
        }}>
            <p className='w-1/2 font-medium text-3xl text-white'>{title}</p>
        </div>
    )
}

export default Card