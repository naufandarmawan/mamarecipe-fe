import React from 'react'

const Textarea = ({ label="Label", placeholder = "Placeholder", className, ...props }) => {
    return (
        <div>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">{label}</span>
                </div>
                <textarea {...props} className={`textarea textarea-bordered ${className}`} placeholder={placeholder}></textarea>
            </label>
        </div>

    )
}

export default Textarea