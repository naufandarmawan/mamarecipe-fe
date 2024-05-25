import React from 'react'

const Textarea = ({ label="Label", placeholder = "Placeholder", className, ...props }) => {
    return (
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">{label}</span>
                </div>
                <textarea {...props} className={`textarea textarea-bordered ${className}`} placeholder={placeholder}></textarea>
            </label>

    )
}

export default Textarea