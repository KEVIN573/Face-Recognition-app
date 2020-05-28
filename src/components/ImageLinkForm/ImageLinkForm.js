import React from 'react'
import '../ImageLinkForm/ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonsubmit}) => {
  return (
     <section className='imagelink'>
      <div className='ko-text-container'>
        <p>{'Detect a face in your image, have Fun!'}</p>
      </div>
      
      <div className='input-container'>
        <input type='text' id="email"  name="email" placeholder='Enter Image Url'  onChange={onInputChange}/>
        <button className="btn-detect" onClick={onButtonsubmit}><span>Detect</span></button>
      </div>  
    </section>
    
  )
}

export default ImageLinkForm
