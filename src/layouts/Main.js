import React from 'react';
import { Outlet } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Home></Home>
            <About></About>
            <Portfolio></Portfolio>
            <Experience></Experience>
            <Contact></Contact> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;