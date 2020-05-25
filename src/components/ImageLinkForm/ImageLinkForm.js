import React from 'react'

const ImageLinkForm = ({onInputChange, onButtonsubmit}) => {
  return (
     <section className='imagelink'>
      <div className='text'>
        <p>{'This App will detect a face in your image, Give it a try'}</p>
      </div>
      
      <div className='input-container'>
        <input type='text' id="email"  name="email" placeholder='Enter Image Url'  onChange={onInputChange}/>
        <button className="btn-detect" onClick={onButtonsubmit}><span>Detect</span></button>
      </div>  
    </section>
    
  )
}

export default ImageLinkForm
