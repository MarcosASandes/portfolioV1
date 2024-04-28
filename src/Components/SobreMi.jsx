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

        let pasado = (
            <p>
                Desde mi infancia, <strong>la tecnología ha sido una pasión constante en mi vida.</strong> 
                Mis <em>primeros encuentros con el mundo digital</em> se dieron a través del <u>diseño gráfico</u> y la <u>edición de vídeos</u>, 
                lo que despertó en mí una <strong>profunda fascinación por el proceso de convertir ideas en realidades tangibles</strong>. 
                Este interés me llevó a explorar el <em>arte digital y electrónico</em> durante un año en mi formación académica en <em>Bellas Artes</em>.
                <br/>

                Durante ese tiempo, tuve mis primeros acercamientos a la <strong>programación con <em>Javascript</em></strong>, lo que despertó mi curiosidad
                y me llevó a adentrarme más en el campo de la tecnología. 
                Fue entonces cuando decidí seguir una carrera en <strong>Analista en Tecnologías de la Información en la <u>Universidad ORT</u></strong>.
                <br/>

                A lo largo de mi <em>trayectoria académica</em>, he cultivado diversas habilidades <strong>técnicas</strong> y <strong>blandas</strong>, 
                siempre enfocado en mantener una ética de trabajo <u>rigurosa</u> y <u>organizada</u>. 
                Estoy comprometido con la excelencia en todo lo que hago y estoy emocionado por seguir creciendo y 
                aprendiendo en este apasionante mundo tecnológico.
            </p>
          );
        


        let presente = (
            <p>
                Actualmente, me encuentro en la <em>recta final</em> de mi <strong>último semestre universitario</strong>, 
                a punto de enfrentarme al <em><strong>proyecto final</strong> que marcará el cierre de esta etapa académica</em>. 
                Mientras tanto, estoy inmerso en el <strong>desarrollo de varios proyectos personales</strong>, con el objetivo de <strong><u>ampliar mis 
                conocimientos</u> y <u>reforzar las habilidades</u></strong> que he adquirido hasta el momento.
                <br/>

                Además de mi enfoque en el <strong>ámbito técnico</strong>, estoy dedicando tiempo al estudio de <strong>metodologías ágiles</strong>. 
                Aunque ya he completado un curso en este campo, mi objetivo actual es profundizar mis conocimientos 
                y obtener una comprensión más sólida. Para mí, <strong>la <em>ejecución de una idea</em> es tan crucial como la <em>idea misma</em></strong>, y estoy comprometido 
                a aprender y crecer continuamente en este proceso.
            </p>
          );




        let futuro = (
            <p>
                Si bien el futuro es incierto, mantengo el deseo de un futuro en el que tanto mi desarrollo 
                <em>profesional</em> como <em>personal</em> alcanzarán nuevas cotas de excelencia. En el <u>ámbito técnico</u>, aspiro a <strong>forjar 
                una ética de trabajo <em>sólida y distintiva</em></strong>, que refleje mi visión del mundo y con la cual me sienta profundamente orgulloso.
                <br/>

                En lo que respecta al <em>backend</em>, estoy decidido a sumergirme aún más en el vasto <strong>ecosistema de Microsoft</strong>, 
                explorando cada faceta para dominarla por completo. Por otro lado, en el ámbito del <em>frontend</em>, 
                me apasiona profundamente el uso de <strong>React</strong> y estoy comprometido a perfeccionar mis habilidades en esta tecnología líder. 
                Además, <em>como objetivo personal</em>, albergo un gran interés en adentrarme en el fascinante mundo de <strong>ThreeJS</strong> 
                <em>y otras tecnologías afines</em>, buscando expandir mis horizontes y explorar nuevas posibilidades creativas.
            </p>
          );


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






















