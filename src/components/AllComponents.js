import React from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import SocialLinks from './SocialLinks';


const AllComponents = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Experience></Experience>
        <Contact></Contact>
        <SocialLinks></SocialLinks>
      </div>
    );
};

export default AllComponents;