import React, {useState, useEffect} from 'react';
import $ from 'jquery';

import logo1 from '../img/logo-darkT.png';
import logo2 from '../img/logo-lightT.png';


const Navbar = () => {
    
    const [logo, setLogo] = useState(logo1);

    useEffect(() => {
        const nav = $('nav');
        let navHeight = nav.outerHeight();

        $('.navbar-toggler').on('click', function() {
            if( ! $('#mainNav').hasClass('navbar-reduce')) {
              $('#mainNav').addClass('navbar-reduce');
            }
          })

        $('body').scrollspy({
            target: '#mainNav',
            offset: navHeight
        });

        $('.js-scroll').on("click", function () {
            $('.navbar-collapse').collapse('hide');
        });

        window.addEventListener('scroll', ()=>{
            if(window.pageYOffset > 50){
                document.querySelector('.navbar-expand-md').classList.add('navbar-reduce');
                document.querySelector('.navbar-expand-md').classList.remove('navbar-trans');
                setLogo(logo2);
            }else {
                document.querySelector('.navbar-expand-md').classList.add('navbar-trans');
                document.querySelector('.navbar-expand-md').classList.remove('navbar-reduce');
                setLogo(logo1);
            }
        });

        $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
            if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - navHeight + 5)
                    }, 1000, "easeInExpo");
                    return false;
                }
            }
        });
        
        $('.js-scroll').on("click", function () {
            $('.navbar-collapse').collapse('hide');
        });
    }, [logo])

    return (
        <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll" href="#page-top"><img src={logo} alt="logo" style={{maxWidth: "100px"}}/></a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link js-scroll active" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/10_PZ8E7j8w-Qx0BG3lm3mIEBqqkU6acv/view?usp=sharing">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll" href="#contact">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
