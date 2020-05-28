import React from 'react';
import '../FaceRecognition/FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='img-container'>
      <img src={imageUrl} alt='pictures displays here.' />
      <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>
  )
}

export default FaceRecognition
