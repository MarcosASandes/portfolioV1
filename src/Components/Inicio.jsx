import React from 'react'
import Typewriter from './Typewriter';

const Inicio = () => {
    return (
        <div className="p-5 text-center image-fondo">

            <section className='titulo-inicio-section'>
                <Typewriter text="¡Hola, me llamo Marcos!" option={1} />
            </section>




            <div className="row subtitulo-inicio-general">
                <div className="col sub-inicio-boton d-flex align-items-center justify-content-center">
                    <section className='boton-inicio-section'>
                        <a href="#proyectos" className="boton">Proyectos</a>
                    </section>
                </div>
                <div className="col sub-inicio-bienvenida">
                    <section className='subtitulo-inicio-section'>
                        <p className='subtitulo-inicio-section-text display-5'>
                            Ponte <strong>cómodo/a,</strong><br />
                            mi portafolio es tu portafolio.
                        </p>
                    </section>
                </div>
            </div>


            {/*           
            <section className='subtitulo-inicio-section'>
                <p className='subtitulo-inicio-section-text display-5'>Ponte <strong>cómodo/a,</strong> mi portafolio es tu portafolio.</p>
            </section>

            <section className='boton-inicio-section'>
                <a href="#proyectos" className="boton">Proyectos</a>
            </section>
            */}


        </div>
    );
}

export default Inicio