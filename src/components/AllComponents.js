import React from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Projects from './Projects';
import SocialLinks from './SocialLinks';


const AllComponents = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        {/* <Portfolio></Portfolio> */}
        <Projects></Projects>
        <Experience></Experience>
        <Contact></Contact>
        <SocialLinks></SocialLinks>
        <Footer></Footer>
      </div>
    );
};

export default AllComponents;