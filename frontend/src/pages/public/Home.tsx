import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';
import '../../styles/home.css';
import Navbar from "../../components/Navbar";

const Home = () => {
    return (
        <div>
            <section className="section1">
                <div className="container, centralize">
                    <Navbar/>
                </div>
            </section>
        </div>
    );
};

export default Home;