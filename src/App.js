import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Particals from './components/Particals/Particals';
import Footer from './components/Footer/Footer';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'c63f6ce93f1e46069caa98254ffe8f2e'
 });

class App extends Component {
  constructor() {
    super();
    this.state = { 
      input: '',
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
  componentDidMount() {
    fetch('http://localhost:4000')
    .then(response => response.json())
    .then(console.log())
  } 
  

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
       .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
       .catch(err => console.log(err))
  }
  
  render() {  
    return ( 
    <main className="main-section">
      <Navigation />
      <section className='content-section'>
        <Particals/>
        <div className="content-items">
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition box= {this.state.box} imageUrl={this.state.imageUrl}/>
        </div>
      </section>
      <Footer />
    </main>
     );
  }
}
 
export default App;
