import React from 'react';
import jsImage from '../img_tecnologias/js.jpeg';
import csharpImage from '../img_tecnologias/csharp.jpeg';
import reactImage from '../img_tecnologias/react.jpeg';


const Tecnologias = () => {
    return (
        <div className="tecnologias">
            <img src={jsImage} alt="JavaScript" className="tecnologia" />
            <img src={csharpImage} alt="C#" className="tecnologia" />
            <img src={reactImage} alt="React" className="tecnologia" />


            {/* Agrega más imágenes de tecnologías según necesites */}
        </div>
    );
}

export default Tecnologias;
