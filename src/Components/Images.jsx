import React from 'react'

const Images = ({ src, className }) => {
  return (
    <img src={src}
      alt="notes"
      className={className}
    />
  )
}

export default Images