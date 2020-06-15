import React, { Component } from 'react';
import './FaceRecognition.css'

class FaceRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      imageUrl: '',
      box: {},
     }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.output[0].data.regions[0].region_infor.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
    console.log(box)
  }

  render() { 
    return ( 
      <div className='img-container'>
        <img id='input-image' src={this.imageUrl} alt='' style={{width: '500px', height:'auto'}} />
        <div className='bounding-box' style={{top: this.state.box.topRow, right: this.state.box.rightCol, bottom: this.state.box.bottomRow, left: this.state.box.leftCol}}></div>
      </div>
     );
  }
}
 
export default FaceRecognition;
