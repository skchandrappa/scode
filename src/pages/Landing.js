import main from '../assets/images/logo.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import React from 'react';
// import About from './landing/About';
// import Hero from './landing/Hero';
// import Navbar from './landing/Navbar';
// import Services from './landing/Services';
// import Tours from './landing/Tours';
// import Footer from './landing/Footer';


const Landing = () => {
  return (

    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Script <span>Decode</span> app
          </h1>
          <p>
            Scode ( Script Decode) is AI enabled Script writing and recommendation application. Write your scripts and Visualize as Graphs. Get AI enabled recommendations based on what you write
            .Recommedations are on each phases of movie cycle including Movie recorremndations, Story board recommendations, Sound Design Recommendations.

            Take a Tour by loggin in and clicking on DEMO.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>


  );
};

export default Landing;
