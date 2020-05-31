import React from 'react';
import '../FaceRecognition/FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='img-container'>
      <img id='input-image' src={imageUrl} alt='' width='200px' height='auto'/>
      <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>
  )
}

export default FaceRecognition
