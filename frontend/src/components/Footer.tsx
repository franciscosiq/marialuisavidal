import React from 'react';

const Footer = () => {
    return (
        <footer className="centralize">
            <div className="container">
                <div className="footer-links">
                    <div>
                        <h2 className="section-footer-title socials-links-title">REDES SOCIAIS</h2>
                        <div>
                            <div className="socials-links">
                                <a href="/">
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M29.8995 5.09258C28.2868 3.47227 26.3661 2.18753 24.2494 1.31322C22.1327 0.438921 19.8622 -0.00746053 17.5703 9.43162e-05C7.96734 9.43162e-05 0.140704 7.78757 0.140704 17.3425C0.140704 20.405 0.949749 23.38 2.46231 26.005L0 35L9.23367 32.585C11.7839 33.9675 14.6508 34.7025 17.5703 34.7025C27.1734 34.7025 35 26.915 35 17.36C35 12.7226 33.1884 8.36507 29.8995 5.09258ZM17.5703 31.7625C14.9673 31.7625 12.4171 31.0625 10.1834 29.75L9.65578 29.435L4.16834 30.87L5.62814 25.55L5.27638 25.0075C3.82986 22.7099 3.06193 20.0538 3.0603 17.3425C3.0603 9.39757 9.56784 2.92259 17.5528 2.92259C21.4221 2.92259 25.0628 4.42758 27.7889 7.15758C29.139 8.49433 30.2089 10.0845 30.9365 11.8359C31.6641 13.5873 32.035 15.465 32.0276 17.36C32.0628 25.305 25.5553 31.7625 17.5703 31.7625ZM25.5201 20.9825C25.0804 20.7725 22.9347 19.7225 22.5477 19.565C22.1432 19.425 21.8618 19.355 21.5628 19.775C21.2638 20.2125 20.4372 21.1925 20.191 21.4725C19.9447 21.77 19.6809 21.805 19.2412 21.5775C18.8015 21.3675 17.3945 20.895 15.7412 19.425C14.4397 18.27 13.5779 16.8526 13.3141 16.4151C13.0678 15.9776 13.2789 15.7501 13.5075 15.5226C13.701 15.3301 13.9472 15.0151 14.1583 14.7701C14.3693 14.5251 14.4573 14.3326 14.598 14.0526C14.7387 13.7551 14.6683 13.5101 14.5628 13.3001C14.4573 13.0901 13.5779 10.9551 13.2261 10.0801C12.8744 9.24007 12.505 9.34507 12.2412 9.32757H11.397C11.098 9.32757 10.6407 9.43257 10.2362 9.87007C9.84924 10.3076 8.72362 11.3576 8.72362 13.4926C8.72362 15.6276 10.2889 17.6925 10.5 17.9725C10.7111 18.27 13.5779 22.645 17.9397 24.5175C18.9774 24.9725 19.7864 25.235 20.4196 25.4275C21.4573 25.76 22.407 25.7075 23.1633 25.6025C24.0075 25.48 25.7487 24.5525 26.1005 23.5375C26.4698 22.5225 26.4698 21.665 26.3467 21.4725C26.2236 21.28 25.9598 21.1925 25.5201 20.9825Z"
                                            fill="#4C4C4C"/>
                                    </svg>
                                </a>
                                <a href="/">
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M35 17.5439C35 7.85965 27.16 0 17.5 0C7.84 0 0 7.85965 0 17.5439C0 26.0351 6.02 33.1053 14 34.7368V22.807H10.5V17.5439H14V13.1579C14 9.77193 16.7475 7.01754 20.125 7.01754H24.5V12.2807H21C20.0375 12.2807 19.25 13.0702 19.25 14.0351V17.5439H24.5V22.807H19.25V35C28.0875 34.1228 35 26.6491 35 17.5439Z"
                                            fill="#4C4C4C"/>
                                    </svg>
                                </a>
                                <a href="/">
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M31.1111 0C32.1425 0 33.1317 0.409721 33.861 1.13903C34.5903 1.86834 35 2.85749 35 3.88889V31.1111C35 32.1425 34.5903 33.1317 33.861 33.861C33.1317 34.5903 32.1425 35 31.1111 35H3.88889C2.85749 35 1.86834 34.5903 1.13903 33.861C0.409721 33.1317 0 32.1425 0 31.1111V3.88889C0 2.85749 0.409721 1.86834 1.13903 1.13903C1.86834 0.409721 2.85749 0 3.88889 0H31.1111ZM30.1389 30.1389V19.8333C30.1389 18.1522 29.471 16.5398 28.2823 15.3511C27.0935 14.1623 25.4812 13.4944 23.8 13.4944C22.1472 13.4944 20.2222 14.5056 19.2889 16.0222V13.8639H13.8639V30.1389H19.2889V20.5528C19.2889 19.0556 20.4944 17.8306 21.9917 17.8306C22.7136 17.8306 23.4061 18.1174 23.9166 18.6279C24.4271 19.1384 24.7139 19.8308 24.7139 20.5528V30.1389H30.1389ZM7.54444 10.8111C8.41082 10.8111 9.24171 10.4669 9.85433 9.85433C10.4669 9.24171 10.8111 8.41082 10.8111 7.54444C10.8111 5.73611 9.35278 4.25833 7.54444 4.25833C6.67291 4.25833 5.83708 4.60455 5.22081 5.22081C4.60455 5.83708 4.25833 6.67291 4.25833 7.54444C4.25833 9.35278 5.73611 10.8111 7.54444 10.8111ZM10.2472 30.1389V13.8639H4.86111V30.1389H10.2472Z"
                                            fill="#4C4C4C"/>
                                    </svg>
                                </a>
                                <a href="/">
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.15 0H24.85C30.45 0 35 4.55 35 10.15V24.85C35 27.5419 33.9306 30.1236 32.0271 32.0271C30.1236 33.9306 27.5419 35 24.85 35H10.15C4.55 35 0 30.45 0 24.85V10.15C0 7.45805 1.06937 4.87636 2.97287 2.97287C4.87636 1.06937 7.45805 0 10.15 0ZM9.8 3.5C8.12914 3.5 6.52671 4.16375 5.34523 5.34523C4.16375 6.52671 3.5 8.12914 3.5 9.8V25.2C3.5 28.6825 6.3175 31.5 9.8 31.5H25.2C26.8709 31.5 28.4733 30.8363 29.6548 29.6548C30.8363 28.4733 31.5 26.8709 31.5 25.2V9.8C31.5 6.3175 28.6825 3.5 25.2 3.5H9.8ZM26.6875 6.125C27.2677 6.125 27.8241 6.35547 28.2343 6.7657C28.6445 7.17594 28.875 7.73234 28.875 8.3125C28.875 8.89266 28.6445 9.44906 28.2343 9.8593C27.8241 10.2695 27.2677 10.5 26.6875 10.5C26.1073 10.5 25.5509 10.2695 25.1407 9.8593C24.7305 9.44906 24.5 8.89266 24.5 8.3125C24.5 7.73234 24.7305 7.17594 25.1407 6.7657C25.5509 6.35547 26.1073 6.125 26.6875 6.125ZM17.5 8.75C19.8206 8.75 22.0462 9.67187 23.6872 11.3128C25.3281 12.9538 26.25 15.1794 26.25 17.5C26.25 19.8206 25.3281 22.0462 23.6872 23.6872C22.0462 25.3281 19.8206 26.25 17.5 26.25C15.1794 26.25 12.9538 25.3281 11.3128 23.6872C9.67187 22.0462 8.75 19.8206 8.75 17.5C8.75 15.1794 9.67187 12.9538 11.3128 11.3128C12.9538 9.67187 15.1794 8.75 17.5 8.75ZM17.5 12.25C16.1076 12.25 14.7723 12.8031 13.7877 13.7877C12.8031 14.7723 12.25 16.1076 12.25 17.5C12.25 18.8924 12.8031 20.2277 13.7877 21.2123C14.7723 22.1969 16.1076 22.75 17.5 22.75C18.8924 22.75 20.2277 22.1969 21.2123 21.2123C22.1969 20.2277 22.75 18.8924 22.75 17.5C22.75 16.1076 22.1969 14.7723 21.2123 13.7877C20.2277 12.8031 18.8924 12.25 17.5 12.25Z"
                                            fill="#4C4C4C"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-footer-title">O ESCRITÓRIO</h2>
                        <div>
                            <a href="/">Página Inicial</a>
                            <a href="/">Área de Atuação</a>
                            <a href="/">Equipe</a>
                            <a href="/">Sobre</a>
                            <a href="/">Experiência</a>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-footer-title">BLOG</h2>
                        <div>
                            <a href="/">Artigos em Destaque</a>
                            <a href="/">Todos os Artigos</a>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-footer-title">POLÍTICA</h2>
                        <div>
                            <a href="/">Privacidade</a>
                            <a href="/">Termos de uso</a>
                            <a href="/">Cookies</a>
                            <h2 className="section-footer-title">
                                DIREITOS RESERVADOS<br/>
                                © 2024 - ALÉM
                            </h2>
                        </div>
                    </div>
                </div>
                <hr/>
                <a href="https://franciscosiq.com" className="centralize">Desenvolvido por FranciscoSiq</a>
            </div>
        </footer>
    );
};

export default Footer;