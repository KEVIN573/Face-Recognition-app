import React, { Component } from 'react'
import Rank from '../Rank/Rank'
import FaceRecognition from '../FaceRecognition/FaceRecognition'
import '../Banner/Banner.css'
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {

          }
    }

    render() { 
        return ( 
            <section class="banner-section">
                <div class="banner-content">
                    <Rank />
                    <ImageLinkForm />
                    <FaceRecognition />
                </div>   
            </section>
         );
    }
}
 
export default Banner;
