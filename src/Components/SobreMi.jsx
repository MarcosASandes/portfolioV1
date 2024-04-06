import React from 'react';
import Tecnologias from './Tecnologias';


const SobreMi = () => {
    return (
        <section className="sobre-mi">
            <div className="container">
                <h1 className="titulo-sobre-mi text-center font-weight-bold">Sobre mi</h1>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <h3>Conóceme</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nisi eget massa fermentum malesuada.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Tecnologías</h3>
                        <Tecnologias />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default SobreMi;
