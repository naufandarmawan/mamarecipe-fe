"use client"

import React, { useState } from 'react'

const Input = ({ type = 'text', name, label, placeholder = "Placeholder", className, icon = false, validations = {}, onChange, ...props }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);

        if (onChange) {
            onChange(newValue); // Call onChange function passed from parent
        }

        if (validations[name]) {
            const errorMessage = validations[name](newValue);
            setError(errorMessage);
        }
    }

    return (
        <label className="form-control w-full">
            {label && (<div className="label">
                <span className="label-text">{label}</span>
            </div>)}
            {/* <input {...props} type="text" placeholder={placeholder} className={`input input-bordered w-full focus:border-yellow-400 ${className} `} /> */}
            <label {...props} className={`input input-bordered w-full flex items-center focus:!border-yellow-400 gap-2 ${className}`}>
                {icon === true && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>}
                <input
                    type={type}
                    value={value}
                    onChange={handleChange}
                    className="grow focus:!border-yellow-400"
                    placeholder={placeholder}
                    {...props}
                />
            </label>
            {error && 
            <div className="label">
                <span className="label-text-alt text-red-500">{error}</span>
            </div>
            }
        </label>


    )
}

export default Input