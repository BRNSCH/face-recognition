import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {

    return (

               
            
            <div className='center  form-div'>
             
                <p className='f3 form-p'>
                    {'This Magic Brain will detect faces in your pictures.'}
                </p>
                <div className='center form'>
                <input
                    className='f4 pa2 w-70 center'
                    type='text'
                    placeholder='Send image...'
                    onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 v2 dib white'
                    onClick={onButtonSubmit}>detect</button>
                </div>
            </div>
        
        

        
    )
}
export default ImageLinkForm;