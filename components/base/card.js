import React from 'react'

const Card = ({image, title = 'Title', ...props}) => {
    return (
        <div {...props} className='w-full h-80 flex flex-col justify-end items-start p-6 rounded-xl bg-cover cursor-pointer' style={{
            backgroundImage: `url('${image || "/recipe-thumbnail.png"}')`
        }}>
            <p className='w-full font-medium text-3xl text-white'>{title}</p>
        </div>
    )
}

export default Card