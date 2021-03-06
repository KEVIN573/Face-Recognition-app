import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='img-container'>
      <img id='input-image' alt='' src={imageUrl} width='500px' heigh='auto'/>
      <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>
    
  );
}

export default FaceRecognition;
