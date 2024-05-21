import React from 'react'

const Input = ({label = "Label", placeholder = "Placeholder", className, ...props}) => {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input {...props} type="text" placeholder={placeholder} className={`input input-bordered w-full focus:border-yellow-400 ${className} `} />
        </label>
    )
}

export default Input