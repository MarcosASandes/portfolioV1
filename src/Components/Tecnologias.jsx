import React from 'react';
import jsImage from '../imgs_logos/js.png';
import csharpImage from '../imgs_logos/c-sharp.png';
import reactImage from '../imgs_logos/physics.png';
import bootsImage from '../imgs_logos/bootstrap.png';
import cssImage from '../imgs_logos/css-3.png';
import githubImage from '../imgs_logos/github.png';
import htmlImage from '../imgs_logos/html-5.png';
import javaImage from '../imgs_logos/java.png';
import gitImage from '../imgs_logos/social.png';
import sqlImage from '../imgs_logos/icons8-servidor-microsoft-sql-480.png';
import reduxImage from '../imgs_logos/icons8-redux-480.png';
import netImage from '../imgs_logos/icons8-net-framework-480.png';



const Tecnologias = () => {
    return (
        <div className="tecnologias">
            <img src={jsImage} alt="JavaScript" className="tecnologia" />
            <img src={csharpImage} alt="C#" className="tecnologia" />
            <img src={reactImage} alt="React" className="tecnologia" />
            <img src={bootsImage} alt="Bootstrap" className="tecnologia" />
            <img src={cssImage} alt="CSS" className="tecnologia" />
            <img src={githubImage} alt="Github" className="tecnologia" />
            <img src={htmlImage} alt="HTML" className="tecnologia" />
            <img src={javaImage} alt="Java" className="tecnologia" />
            <img src={gitImage} alt="Git" className="tecnologia" />
            <img src={sqlImage} alt="SQL Server" className="tecnologia" />
            <img src={reduxImage} alt="Redux" className="tecnologia" />
            <img src={netImage} alt=".Net Framework" className="tecnologia" />


            {/* Agrega más imágenes de tecnologías según necesites */}
        </div>
    );
}

export default Tecnologias;
