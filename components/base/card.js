import React from 'react';

const Card = ({ image, title = 'Title', ...props }) => {
    return (
        <div
            {...props}
            className='w-full h-80 flex flex-col justify-end items-start p-6 rounded-xl bg-cover cursor-pointer'
            style={{
                backgroundImage: `url('${image || "/recipe-thumbnail.png"}')`,
                position: 'relative',
                overflow: 'hidden'
            }}
        >

            <div
                className='absolute inset-0'
                style={{
                    zIndex: 1,
                    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.48) 100%)',
                }}
            />
            <p
                className='relative z-10 w-full font-medium text-3xl text-white'
                style={{ zIndex: 2 }}
            >
                {title}
            </p>
        </div>
    );
};

export default Card;
