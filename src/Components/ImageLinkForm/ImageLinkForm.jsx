import React from 'react'
import "./ImageLinkForm.css"

export default function ImageLinkForm() {
    return (
        <div>
            <p className="f3">
                {'FaceScan App will detect faces in your pictures. Give it a try!'}
            </p>
            <div className="pa4 br3 shadow-5 form center">
                <input className="f4 pa2 w-70 center" type="text" />
                <button className="2-30 grow f4 link ph3 pv2 dib white bg-hot-pink">Detect</button>
            </div>
        </div>
    );
}

