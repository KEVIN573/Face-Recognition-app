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
     }
  }

  componentDidMount() {
    fetch('http://localhost:4000')
    .then(response => response.json())
    .then(console.log())
  }
  

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonsubmit = () => {
    this.setState({imageUrl: this.state.input})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      console.log(response)
    },
    function(err) {
      // there was an error
    }
  );
  }
  render() { 
    return ( 
    <main className="main-section">
      <Particals/>
      <Navigation />
      <section className='content-section'>
        <div className="content-items">
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonsubmit={this.onButtonsubmit}/>
          <FaceRecognition imageUrl={this.state.imageUrl}/>
        </div>
      </section>
      <Footer />
    </main>
     );
  }
}
 
export default App;
