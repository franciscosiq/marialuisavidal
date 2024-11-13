import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar - Copy.css';
import '../../styles/home.css';
import Navbar from "../../components/Navbar";

const Home = () => {

    //carousel script
    const [currentIndex, setCurrentIndex] = useState(0);
    const phrases = [
        "Você conhece seus direitos em relação a demora na fila do SUS?",
        "Sabia que o médico tem obrigação de informar sobre os riscos de procedimento?",
        "Você sabe como funciona o direito à saúde no Brasil?",
        "Está ciente dos seus direitos como paciente em uma consulta médica?",
        "Você tem direito a atendimento médico de qualidade, independente de onde viva?"
    ];

    const links = [
        "/link1",
        "/link2",
        "/link3",
        "/link4",
        "/link5"
    ];

    const nextPhrase = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    };

    const prevPhrase = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + phrases.length) % phrases.length);
    };

    useEffect(() => {
        const interval = setInterval(nextPhrase, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <section className="banner">
                <div className="centralize">
                    <div className="container">
                        <Navbar />
                        <div className="slogan">
                            <h1>Proteção jurídica<br />
                                no campo do direito<br />
                                médico e da saúde.</h1>
                            <div></div>
                            <h2>Para pacientes e profissionais da saúde</h2>
                        </div>
                        <div className="carousel">
                            <button className="left-btn" onClick={prevPhrase}>
                                <svg width="16" height="33" viewBox="0 0 16 33" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5762 2L2.00022 17.3101L13.5762 31.5" stroke="#EEEEEE"
                                          stroke-width="2.98734" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <Link to={links[currentIndex]}>
                                <p className="carousel-text">{phrases[currentIndex]}</p>
                            </Link>
                            <button className="right-btn" onClick={nextPhrase}>
                                <svg width="16" height="33" viewBox="0 0 16 33" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L13.5759 17.3101L2 31.5" stroke="#EEEEEE" stroke-width="2.98734"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
            </section>
            <section className="last-articles, centralize">
                <div className="container">
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>
                    <p>asdasdasdasdasdas</p>

                </div>
            </section>
        </div>
    );
};

export default Home;
