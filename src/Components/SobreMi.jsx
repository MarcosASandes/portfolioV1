import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { guardarTextos } from '../features/sobreMiSlice';
import { useSelector } from 'react-redux';


const SobreMi = () => {


    

    const dispatch = useDispatch();
    
    const textPas = useSelector(state => state.sobreMi.textPasado);
    const textPre = useSelector(state => state.sobreMi.textPresente);
    const textFut = useSelector(state => state.sobreMi.textFuturo);

    const [subtitulo, setSubtitulo] = useState("Pasado");
    const [texto, setTexto] = useState("");

    

    useEffect(() => {
        const textos = ['Texto del Pasado', 'Texto del Presente', 'Texto del Futuro'];
        dispatch(guardarTextos(textos));
    }, []);

    useEffect(() => {
        // Inicializa el estado con el texto del Pasado
        setTexto(textPas);
    }, [textPas]);

    

    const handleCambioTexto = (nuevoTexto) => {
        setSubtitulo(nuevoTexto);

        if(nuevoTexto == "Pasado"){
            setTexto(textPas);
        }
        else if(nuevoTexto == "Presente"){
            setTexto(textPre);
        }
        else if(nuevoTexto == "Futuro"){
            setTexto(textFut);
        }

    };

    return (
        <section className="sobre-mi-section bg-dark text-white py-5">
            <div className="container">
                <h2 className="text-center mb-4" id='sobremi-section'>Sobre mí</h2>
                <div className="row">
                    <div className="col-6">
                        <h3>Conóceme</h3>
                        <h4>{subtitulo}</h4>
                        <p>{texto}</p>
                        <div className="circulos">
                            <div className={`circulo ${subtitulo === "Pasado" ? "active" : ""}`} onClick={() => handleCambioTexto('Pasado')}></div>
                            <div className={`circulo ${subtitulo === "Presente" ? "active" : ""}`} onClick={() => handleCambioTexto('Presente')}></div>
                            <div className={`circulo ${subtitulo === "Futuro" ? "active" : ""}`} onClick={() => handleCambioTexto('Futuro')}></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h3>Tecnologías</h3>
                        {/* Aquí irá el contenido de Tecnologías */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SobreMi;






















