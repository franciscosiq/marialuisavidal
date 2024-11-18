import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.css';
import '../../styles/navbar.css';
import '../../styles/footer.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Teacher1 from "./images/teacher1.jpg"


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
    }, [currentIndex]);

    //scroll script

    return (
        <div className="home-body">
            <section className="banner">
                <div className="centralize">
                    <Navbar/>
                    <div className="container">
                        <div className="slogan">
                            <h1>Proteção jurídica<br/>
                                no campo do direito<br/>
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
                <div className="centralize">
                    <Link className="more-details-btn" to={links[currentIndex]}>Mais detalhes...</Link>
                </div>
                <hr className="bottom-line-banner"/>
            </section>
            <section id="content" className="centralize">
                <div className="container">
                    <div id="featured-articles" className="category">
                        <h2 className="category-title">Artigos em destaque</h2>
                    </div>

                    <div className="article">
                        <div>
                            <a href="/">
                                <img className="article-image"
                                     src="https://bortolotto.adv.br/blog/wp-content/uploads/2024/11/TXT01-blog-1200x800-1.jpg"
                                     alt=""/>
                                <h2>Equiparação Hospitalar: Reduza Impostos em Clínicas Médicas</h2>
                                <p>A equiparação hospitalar é uma estratégia
                                    essencial para reduzir a carga tributária em
                                    clínicas médicas e odontológicas.
                                </p>
                                <p>05 de nov, 2024 - 5 min de leitura</p>
                            </a>
                            <a href="/">
                                <img className="article-image"
                                     src="https://bortolotto.adv.br/blog/wp-content/uploads/2024/10/TXT02-blog-1200x800-1.jpg"
                                     alt=""/>
                                <h2>Equiparação Hospitalar: Reduza Impostos em Clínicas Médicas</h2>
                                <p>A equiparação hospitalar é uma estratégia
                                    essencial para reduzir a carga tributária em
                                    clínicas médicas e odontológicas.
                                </p>
                                <p>05 de nov, 2024 - 5 min de leitura</p>
                            </a>
                        </div>
                        <div>
                            <a href="/">
                                <img className="article-image"
                                     src="https://bortolotto.adv.br/blog/wp-content/uploads/2024/09/TXT01-blog-1200x630-2.jpg"
                                     alt=""/>
                                <h2>Equiparação Hospitalar: Reduza Impostos em Clínicas Médicas</h2>
                                <p>A equiparação hospitalar é uma estratégia
                                    essencial para reduzir a carga tributária em
                                    clínicas médicas e odontológicas.
                                </p>
                                <p>05 de nov, 2024 - 5 min de leitura</p>
                            </a>
                            <a href="/">
                                <img className="article-image" src="https://bortolotto.adv.br/blog/wp-content/uploads/2024/08/TXT03-blog-1200x630-1.jpg"
                                     alt=""/>
                                <h2>Equiparação Hospitalar: Reduza Impostos em Clínicas Médicas</h2>
                                <p>A equiparação hospitalar é uma estratégia
                                    essencial para reduzir a carga tributária em
                                    clínicas médicas e odontológicas.
                                </p>
                                <p>05 de nov, 2024 - 5 min de leitura</p>
                            </a>
                        </div>
                    </div>

                    <a href="/" className="centralize view-all-articles-btn">Ver todos os artigos</a>

                    <div id="area-of-activity" className="category">
                        <h2 className="category-title">Area de atuação</h2>
                    </div>

                    <a href="/" className="whatsapp-contact-banner">
                        <svg width="37" height="37" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M12.5 0C5.59625 0 0 5.59625 0 12.5C0 14.8625 0.65625 17.075 1.7975 18.96L0.6825 22.75C0.618481 22.9676 0.614268 23.1984 0.670305 23.4182C0.726343 23.638 0.84056 23.8387 1.00095 23.9991C1.16134 24.1594 1.36198 24.2737 1.58177 24.3297C1.80156 24.3857 2.0324 24.3815 2.25 24.3175L6.04 23.2025C7.98842 24.3812 10.2228 25.0029 12.5 25C19.4037 25 25 19.4037 25 12.5C25 5.59625 19.4037 0 12.5 0ZM9.6725 15.3287C12.2013 17.8562 14.615 18.19 15.4675 18.2212C16.7638 18.2687 18.0262 17.2787 18.5175 16.13C18.579 15.987 18.6012 15.8302 18.5819 15.6757C18.5625 15.5212 18.5023 15.3747 18.4075 15.2513C17.7225 14.3763 16.7962 13.7475 15.8913 13.1225C15.7024 12.9915 15.4701 12.9389 15.2433 12.9758C15.0164 13.0126 14.8127 13.136 14.675 13.32L13.925 14.4637C13.8854 14.525 13.8239 14.5689 13.7531 14.5865C13.6823 14.6042 13.6075 14.5942 13.5437 14.5588C13.035 14.2675 12.2938 13.7725 11.7613 13.24C11.2288 12.7075 10.7638 12 10.5025 11.5238C10.4709 11.4631 10.462 11.3931 10.4773 11.3264C10.4927 11.2598 10.5313 11.2008 10.5863 11.16L11.7412 10.3025C11.9066 10.1595 12.0133 9.96051 12.041 9.74369C12.0686 9.52686 12.0153 9.30745 11.8912 9.1275C11.3312 8.3075 10.6788 7.265 9.7325 6.57375C9.61012 6.48582 9.46711 6.43099 9.31731 6.41457C9.16752 6.39814 9.01602 6.42068 8.8775 6.48C7.7275 6.9725 6.7325 8.235 6.78 9.53375C6.81125 10.3862 7.145 12.8 9.6725 15.3287Z"
                                  fill="#EEEEEE"/>
                        </svg>
                        <h2 className="">Converse agora com um advogado</h2>
                        <p>CLIQUE AQUI!</p>
                    </a>

                    <div id="team" className="category">
                        <h2 className="category-title">Equipe</h2>
                    </div>

                    <div id="contacts-and-additional-information" className="category">
                        <h2 className="category-title">Contatos e informações adicionais</h2>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Home;
