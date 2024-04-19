import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { guardarTextos } from '../features/sobreMiSlice';
import { useSelector } from 'react-redux';
import Tecnologias from './Tecnologias';


const SobreMi = () => {


    

    const dispatch = useDispatch();
    
    const textPas = useSelector(state => state.sobreMi.textPasado);
    const textPre = useSelector(state => state.sobreMi.textPresente);
    const textFut = useSelector(state => state.sobreMi.textFuturo);

    const [subtitulo, setSubtitulo] = useState("Pasado");
    const [texto, setTexto] = useState("");

    

    useEffect(() => {

        let pasado = `Desde mi infancia, la tecnología ha sido una pasión constante en mi vida. 
        Mis primeros encuentros con el mundo digital se dieron a través del diseño gráfico y la edición de vídeos, 
        lo que despertó en mí una profunda fascinación por el proceso de convertir ideas en realidades tangibles. 
        Este interés me llevó a explorar el arte digital y electrónico durante un año en mi formación académica en Bellas Artes.
        
        Durante ese tiempo, tuve mis primeros acercamientos a la programación con Javascript, lo que despertó mi curiosidad
        y me llevó a adentrarme más en el campo de la tecnología. 
        Fue entonces cuando decidí seguir una carrera en Analista en Tecnologías de la Información en la Universidad ORT.
        
        A lo largo de mi trayectoria académica, he cultivado diversas habilidades técnicas y blandas, 
        siempre enfocado en mantener una ética de trabajo rigurosa y organizada. 
        Estoy comprometido con la excelencia en todo lo que hago y estoy emocionado por seguir creciendo y 
        aprendiendo en este apasionante mundo tecnológico.`;


        let presente = `Actualmente, me encuentro en la recta final de mi último semestre universitario, 
        a punto de enfrentarme al proyecto final que marcará el cierre de esta etapa académica. 
        Mientras tanto, estoy inmerso en el desarrollo de varios proyectos personales, con el objetivo de ampliar mis 
        conocimientos y reforzar las habilidades que he adquirido hasta el momento.
        
        Además de mi enfoque en el ámbito técnico, estoy dedicando tiempo al estudio de metodologías ágiles. 
        Aunque ya he completado un curso en este campo, mi objetivo actual es profundizar mis conocimientos 
        y obtener una comprensión más sólida. Para mí, la ejecución de una idea es tan crucial como la idea misma, y estoy comprometido 
        a aprender y crecer continuamente en este proceso.`;


        let futuro = `Si bien el futuro es incierto, mantengo el deseo de un futuro en el que tanto mi desarrollo 
        profesional como personal alcanzarán nuevas cotas de excelencia. En el ámbito técnico, aspiro a forjar 
        una ética de trabajo sólida y distintiva, que refleje mi visión del mundo y con la cual me sienta profundamente orgulloso.
        
        En lo que respecta al backend, estoy decidido a sumergirme aún más en el vasto ecosistema de Microsoft, 
        explorando cada faceta para dominarla por completo. Por otro lado, en el ámbito del frontend, 
        me apasiona profundamente el uso de React y estoy comprometido a perfeccionar mis habilidades en esta tecnología líder. 
        Además, como objetivo personal, albergo un gran interés en adentrarme en el fascinante mundo de ThreeJS 
        y otras tecnologías afines, buscando expandir mis horizontes y explorar nuevas posibilidades creativas.`;




        const textos = [pasado, presente, futuro];
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
                    <div className="col-6 text-right">
                        <h3>Tecnologías</h3>
                        <Tecnologias />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SobreMi;






















