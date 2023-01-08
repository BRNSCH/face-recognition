import React, {Component } from "react";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
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
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        
        id: "",
        name: '',
        email: '',       
        entries: 0,
        joined: ''
      }
    }
  }



  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
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
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
  onButtonSubmit = () => {

    this.setState({ imageUrl: this.state.input });

    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));

  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') { 
      this.setState({ isSignedIn: true })
    }
   
    this.setState({ route: route });
  }

  render() {
    const {isSignedIn, imageUrl,route,box} = this.state;
   
    return (
      
      <>
        <ParticlesBg className="App" type="cobweb" color="#64748b"  num={200} bg={true} />
        <div >       
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>

          {route === 'home'
            ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit} />
              <FaceRecognition
                box={box}
                imageUrl={imageUrl} />
            </div>
            : (
              this.state.route === 'signin'
                ? < SignIn onRouteChange={this.onRouteChange} />
                : <Register onRouteChange={this.onRouteChange} />
            )
            
            
          }
        </div>

      </>
    );
  }
}

export default App;
