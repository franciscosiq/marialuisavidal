import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar - Copy.css';
import '../../styles/home.css';
import Navbar from "../../components/Navbar";

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);  // Estado para verificar se o usuário está rolando manualmente

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

    const bannerRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    // Função para detectar se o usuário está rolando manualmente
    const handleScrollStart = () => {
        setIsScrolling(true);
    };

    const handleScrollEnd = () => {
        setIsScrolling(false);
    };

    const handleScroll = () => {
        if (bannerRef.current && contentRef.current) {
            const bannerBottom = bannerRef.current.getBoundingClientRect().bottom;
            const contentTop = contentRef.current.getBoundingClientRect().top;

            // Só fazemos rolagem automática se o usuário não estiver rolando manualmente
            if (!isScrolling) {
                // Se o banner chegou no fim da tela e ainda não estamos na seção de conteúdo, rola para o conteúdo
                if (bannerBottom <= window.innerHeight && window.scrollY < contentTop - 50) {
                    contentRef.current.scrollIntoView({ behavior: 'smooth' });
                }
                // Se estivermos muito perto do topo da seção de conteúdo e ainda não atingimos o banner, rola de volta para o banner
                else if (contentTop >= 0 && window.scrollY <= bannerBottom) {
                    bannerRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrollStart, { passive: true });

        // Detecta quando o usuário para de rolar
        let scrollTimeout: NodeJS.Timeout;
        const endScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(handleScrollEnd, 150);  // Espera 150ms após a última rolagem para marcar o fim
        };
        window.addEventListener('scroll', endScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollStart);
            window.removeEventListener('scroll', endScroll);
            clearTimeout(scrollTimeout);
        };
    }, [isScrolling]);

    return (
        <div className="home-body">
            <section className="banner" ref={bannerRef}>
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
                                          strokeWidth="2.98734" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <Link to={links[currentIndex]}>
                                <p className="carousel-text">{phrases[currentIndex]}</p>
                            </Link>
                            <button className="right-btn" onClick={nextPhrase}>
                                <svg width="16" height="33" viewBox="0 0 16 33" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L13.5759 17.3101L2 31.5" stroke="#EEEEEE" strokeWidth="2.98734"
                                          strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="centralize">
                    <Link className="more-details-btn" to={links[currentIndex]}>Mais detalhes...</Link>
                </div>
                <hr className="bottom-line-banner" />
            </section>
            <section id="content" ref={contentRef} className="centralize">
                <div className="container">
                    <div id="featured-articles" className="category">
                        <h2 className="category-title">Artigos em destaque</h2>
                        <div className="underlined-title"></div>
                    </div>

                    <div id="area-of-activity" className="category">
                        <h2 className="category-title">Área de atuação</h2>
                        <div className="underlined-title"></div>
                    </div>

                    <div id="team" className="category">
                        <h2 className="category-title">Equipe</h2>
                        <div className="underlined-title"></div>
                    </div>

                    <div id="contacts-and-additional-information" className="category">
                        <h2 className="category-title">Contatos e informações adicionais</h2>
                        <div className="underlined-title"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
