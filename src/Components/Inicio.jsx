import React from 'react'
import Typewriter from './Typewriter';

const Inicio = () => {
    return (
        <div className="bg-light p-5 text-center image-fondo">
            <Typewriter text="¡Hola, me llamo Marcos!" option={1} />
            <Typewriter text="Bienvenido a mi portafolio" option={2} />
            <a href="#proyectos" className="boton">Proyectos</a>
        </div>
    );
}

export default Inicio