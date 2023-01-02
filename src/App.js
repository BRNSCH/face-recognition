import React, {Component } from "react";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
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
    }
  }
  
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b",
      "https://sample.clarifai.com/face-det.jpg"
    ).then(
      function (response) { 
         console.log(response);
      },
      function (err) { 
        console.log(err);
      }
    )
    
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
            onSubmit={this.onButtonSubmit} />       
        
        {/* 
        
        <FaceRecognition /> */}
        </div>

      </>
    );
  }
}

export default App;
