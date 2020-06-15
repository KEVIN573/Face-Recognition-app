import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Particals from './components/Particals/Particals';
import Footer from './components/Footer/Footer';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
import SideNav from './components/SideNav/SideNav';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

const app = new Clarifai.App({
  apiKey: 'c63f6ce93f1e46069caa98254ffe8f2e'
 });

class App extends Component {
  constructor() {
    super();
    this.state = { 
      input: '',
      
     }
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
      <Particals />
      <Header />
      <SideNav />
      <Banner />
    </main>
     );
  }
}
 
export default App;
