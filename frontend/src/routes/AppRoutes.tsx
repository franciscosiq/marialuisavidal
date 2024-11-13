import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/public/Home';
// import Articles from '../pages/public/Articles';
// import About from '../pages/public/About';
// import ExperienceAndCommitment from '../pages/public/ExperienceAndCommitment';

import AdminLogin from '../pages/admin/AdminLogin';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            {/* Rotas públicas */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/artigos" element={<Articles />} />*/}
                {/*<Route path="/sobre" element={<About />} />*/}
                {/*<Route path="/experiencia" element={<ExperienceAndCommitment />} />*/}
            </Routes>

            {/* Rotas Administrativas (Protegidas) */}
            <Routes>
                <Route path="/admin" element={<AdminLogin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
