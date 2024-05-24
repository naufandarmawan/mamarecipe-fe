import React from 'react'

const Button = ({ text = "Button", className, loading, ...props }) => {

  return (

      <button {...props} className={`btn bg-[#EFC81A] text-white hover:bg-yellow-500 ${className}`} disabled={loading || props.disabled}>
        {loading ? (
          <>
            <span className="loading loading-spinner"></span>
            Loading
          </>
        ) : (
          text
        )}
      </button>

  )
}

export default Button