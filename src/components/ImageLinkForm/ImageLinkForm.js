import React from 'react'
import '../ImageLinkForm/ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
     <section className='image-link'>
      <div className='ko-text-container'>
        <p>{'Detect a face in your image, have Fun!'}</p>
      </div>
      
      <div className='input-container'>
        <input type='text' id="email"  name="email" placeholder='Enter Image Link'  onChange={onInputChange}/>
        <button className="btn-detect" onClick={onButtonSubmit}><span>Detect</span></button>
      </div>  
    </section>
    
  )
}

export default ImageLinkForm
