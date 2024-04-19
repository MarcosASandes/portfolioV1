
import React, { useEffect } from 'react';

const Cabezal = () => {
    useEffect(() => {
        // Hacer que el menú hamburguesa cierre automáticamente después de hacer clic en un enlace
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        const hideNavbar = () => {
            navbarCollapse.classList.remove('show');
        };

        navbarToggler.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                hideNavbar();
            } else {
                navbarCollapse.classList.add('show');
            }
        });

        document.querySelectorAll('.navbar-nav .nav-link').forEach((item) => {
            item.addEventListener('click', hideNavbar);
        });
    }, []);

    return (
        <header className="bg-black text-white py-3">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="#">Marcos Sandes</a>
                    <button className="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sobremi-section">Sobre mí</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Cabezal;
