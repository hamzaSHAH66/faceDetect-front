import React from 'react';
import 'tachyons';
import Tilt from 'react-parallax-tilt';
import face from './face.png';
import './logo.css';

const Logo = ()=>{


    return(


        <div className="ma4 mt4 position">
            <Tilt className="Tilt br2 shadow-5" options = {{max:55}}>
                <div className="size Tilt-inner pa3">
                    <img style = {{paddingTop:'5px'}} src={face} alt="its brain"/>
                </div>
            </Tilt>
        </div>

    );

}

export default Logo;