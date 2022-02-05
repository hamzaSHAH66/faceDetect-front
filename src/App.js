import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Navigation/logo/logo';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/Navigation/ImageLinkForm/ImageLinkForm';
import ImageBox from './components/ImageBox/ImageBox';
import SignIn from './components/SignIn/SignIn';
import 'tachyons';
import Register from './components/Regiter/Register';
import Rank from './components/Rank/Rank';

const initialState = {

  input:'',
  Imgurl:'',
  box:{},
  route:'isSignIn',
  isSignedIn:false,
  user:[
    
  {
    id:'',
    name:'',
    email:'',
    pass:'',
    entries:'',
    joined:''
  }
 ]
}



class App extends Component {

  constructor(){

    super();
    this.state=initialState;

  }

  onRouteChange = (route) =>{

    if(route === "isSignIn"){
      this.setState({isSignedIn:false});
      this.setState(initialState);
    }
    else if(route === "home"){
      this.setState({isSignedIn:true});
    }
    this.setState({route:route});
  }

  displayBox = (box) =>{

    this.setState({box:box});

  }

  onSubmit=()=>{

    this.setState({Imgurl:this.state.input});
   
    fetch('http://localhost:5000/imageurl',{

      method:'post',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({

        input:this.state.input

      })
    }).then(response => response.json())
      .then(response=>{

        if(response){
          fetch('http://localhost:5000/image',{

            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({

              id:this.state.user.id

            })
          }).then(response => response.json())
            .then(count =>{

              this.setState(Object.assign(this.state.user,{entries:count}))

            }).catch(console.log)
          }

          this.displayBox(this.CalFaceLoc(response))

      }).catch(err =>console.log(err))

    }


  loadUser = (data) =>{

    this.setState({

      user:{

        id:data.id,
        name:data.name,
        email:data.email,
        pass:data.pass,
        entries:data.entries,
        joined:data.joined
      }

    })

  }
 

  onInputChange =(event)=>{

    this.setState({input:event.target.value});
    console.log(event.target.value);
  }
  

  CalFaceLoc = (data) =>{


    const ClariFaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const Image = document.getElementById('ib');
    const width = Number(Image.width);
    const height = Number(Image.height);

    return{

        leftCol: ClariFaiFace.left_col * width,
        topRow : ClariFaiFace.top_row * height,
        rightCol: width - (ClariFaiFace.right_col * width),
        bottomRow: height -  (ClariFaiFace.bottom_row * height)
      }
    
  }

  render(){

    return(

      <div>

<Particles className="particles"
            params={{
                particles:{
                 number: {
                    value:120,
                    
                    density: {
                        enable:true,
                        value_area:800
                    }
                }
                   
                }
            }} />
          
          <Navigation onRouteChange = {this.onRouteChange} signIn = {this.state.isSignedIn}/>

         { this.state.route === 'isSignIn'
          ?
          <div className="">
          <SignIn onRouteChange = {this.onRouteChange} onLoadUser = {this.loadUser}/>
          </div>
          :(this.state.route === 'home'
          ?
          <div>
         <Logo/>
         <Rank username={this.state.user.name} entries ={this.state.user.entries}/>
         <ImageLinkForm onSubmit = {this.onSubmit} onInputChange ={this.onInputChange}/>
         <ImageBox box = {this.state.box} imageUrl = {this.state.Imgurl}/>
         </div>
           :
         <Register onRouteChange = {this.onRouteChange} onLoadUser = {this.loadUser}/>

          )
  }
  
      </div>
          
    );

  }

}

export default App;
