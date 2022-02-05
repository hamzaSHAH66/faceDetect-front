import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onSubmit})=>{


    return(

        <div>
           <p className = 'change f3 tc white'>{'Detect Your Face By put link of Picture'}</p>
          <div className="center">
                  <div className="center pa4 form br3 shadow-5">
      <input className="f4 white pa2 w-70 center bg-black" type="text" onChange={onInputChange}/>
      <button className="w-30 grow f4 link pv2 dib white back" onClick={onSubmit}>Detect</button>
        </div>
        </div>
        </div>
    );


}

export default ImageLinkForm;