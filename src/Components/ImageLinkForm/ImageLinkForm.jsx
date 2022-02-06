import React from 'react'
import "./ImageLinkForm.css"

export default function ImageLinkForm({onInputChange, onButtonSubmit}) {
    return (
        <div>
            <p className="f3">
                {'Lorem ipsum'}
            </p>
            <div className="pa4 br3 shadow-5 form center">
                <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
                <button className="2-30 grow f4 link ph3 pv2 dib white bg-hot-pink" onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    );
}


