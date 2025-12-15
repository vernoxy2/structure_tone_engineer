import React from 'react'
import { Link } from 'react-router-dom'

const GetTouch = ({ className = '', className2 = '' }) => {
  return (
    <Link
      to="/contact"
      onClick={() => {}} // fixed: `onClick` instead of `onclick`
      className={`p-1.5 md:py-3 px-3 md:px-6 bg-primary item-center md:text-xl mx-auto md:mx-0 
        transition-all duration-300 hover:scale-95 hover:shadow-lg active:scale-95 text-white ${className}`}
    >
      <p className={`font-bold  ${className2}`}>
        Get a Touch
      </p>
    </Link>
  )
}

export default GetTouch
