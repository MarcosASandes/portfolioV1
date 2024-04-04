import React from 'react'
import Inicio from './Inicio';

const Main = () => {
    return (
        <div className="container py-4">
            <Inicio />
            <section>
                <h2>Mis Proyectos</h2>
            </section>
            <section>
                <h2>Sobre Mí</h2>
                <p>¡Hola! Soy [Tu Nombre], un desarrollador web apasionado por la creación de aplicaciones increíbles.</p>
            </section>
        </div>
    );
}

export default Main