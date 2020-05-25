import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='img-container'>
      <img src={imageUrl} alt='Detected pic' />
    </div>
  )
}

export default FaceRecognition
