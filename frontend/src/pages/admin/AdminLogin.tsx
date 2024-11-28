import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.css';
import '../../styles/navbar.css';
import '../../styles/footer.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AdminLogin = () => {
    return (
        <div className="home-body">
            <section>
                <div className="centralize">
                    <Navbar/>
                </div>
            </section>
            <Footer/>
            <Footer/>
            <Footer/>
            <Footer/>
            <Footer/>

        </div>
    );
};

export default AdminLogin;