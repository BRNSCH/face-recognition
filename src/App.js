import React, {Component } from "react";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ParticlesBg from 'particles-bg';
import Clarifai  from 'clarifai';
import 'tachyons';
import './App.css';



const app = new Clarifai.App({
  apiKey: 'd3f71972eaf4457db620b1605e92facd'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box:{},
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.top_row * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }
  
  displayFaceBox = (box) => { 
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
  onButtonSubmit = () => {

    this.setState({ imageUrl: this.state.input });

    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));

  }
  render() {
    
   
    return (
      
      <>
        <ParticlesBg className="App" type="cobweb" color="#64748b"  num={200} bg={true} />
        <div >       
          
          
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit} />       
               
          <FaceRecognition
            box={this.state.box}
            imageUrl={this.state.imageUrl} />
        </div>

      </>
    );
  }
}

export default App;
