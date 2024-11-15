import React from 'react'

const ImageFrame = ({width, height, imageUrl}) => {
  return (
    <div style={{width, height, background: `url(${imageUrl})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
  )
}

export default ImageFrame