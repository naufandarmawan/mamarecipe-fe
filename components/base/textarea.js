"use client"

import React, { useState } from 'react'

const Textarea = ({ label, name, placeholder = "Placeholder", className, validations = {}, onChange, ...props }) => {
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
            {label && (
                <div className="label">
                    <span className="label-text">{label}</span>
                </div>
            )}
            <textarea
                value={value}
                onChange={handleChange}
                className={`textarea textarea-bordered ${className}`}
                placeholder={placeholder}
                {...props}
            ></textarea>
        </label>

    )
}

export default Textarea