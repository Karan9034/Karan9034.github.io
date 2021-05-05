import React from 'react';
import ReactDOM from 'react-dom';

// Import CSS
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

// Import JS libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

// Import Components
import Navbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import About from './components/About.js';
// import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import BackToTop from './components/BackToTop.js';
import Preloader from './components/Preloader.js';


ReactDOM.render(
    <React.Fragment>
        <Navbar />
        <Intro />
        <About />
        {/*<Projects />*/} 
        <Contact />
        <BackToTop />
        <Preloader />
    </React.Fragment>,
document.getElementById('root'));
