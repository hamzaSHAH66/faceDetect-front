import React from 'react';
import 'tachyons';
import './navigation.css';
const Navigation = ({signIn,onRouteChange}) =>{
    if(signIn){

        return (
 
            <nav className="color shadow-5">
               <span><h1 className="font">Face  Detection</h1></span>
                     <span className="align mrgn color"><p onClick = {()=>onRouteChange('isSignIn')} className = "f3 link white grow pa3 pointer color1">Sign Out</p></span>
            </nav>
 );
    }
    else{
        return (
            <nav className="color shadow-5">
            <span>
            <h1 className="font">Face  Detection</h1></span>
            <span className="align color">
                     <p onClick = {()=>onRouteChange('isSignIn')} className = "p5 f3 link dim white pa3 pointer">Sign In</p>
                     <p onClick = {()=>onRouteChange('register')} className = "f3 link dim white pa3 mr5 pointer">Register</p>
            </span>
            </nav>
     
 );
    }


}

export default Navigation;