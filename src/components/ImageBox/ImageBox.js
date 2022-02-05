import React from 'react';
import './ImageBox.css';

const ImageBox = ({imageUrl,box}) =>{
    
return(

    <div className="center">
    <div className="style absolute ma2 shadow-5">
         <img  id = "ib" alt='' src={imageUrl} width='500px' height='auto'/>
         <div className="bb" style = {{top:box.topRow,right:box.rightCol,left:box.leftCol,bottom:box.bottomRow}}></div>
    </div>
    </div>
);

}

export default ImageBox;