import React from 'react'

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer justify-start gap-4">
                <input type="checkbox" className="checkbox border-yellow-400 checked:border-yellow-500 [--chkbg:theme(colors.yellow.400)] [--chkfg:white]" checked={checked}
                    onChange={onChange} />
                {label && <span className="label-text">{label}</span>}
            </label>
        </div>
    )
}

export default Checkbox