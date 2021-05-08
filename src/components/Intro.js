import React from 'react';
import './stars.scss';
import Typed from 'react-typed';

const Intro = () => {
  return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Karan Agrawal</h1>
              <p className="intro-subtitle"><span className="text-slider-items">
                  </span><strong className="text-slider"><Typed strings={['MERN Stack Developer', 'Flutter Developer', 'Flask Developer']} typeSpeed = {80} backDelay = {1100} backSpeed = {30} loop/></strong></p>
              <p className="pt-3"><a target="_blank" rel="noopener noreferrer" className="btn btn-primary btn js-scroll px-4" href="https://drive.google.com/file/d/10_PZ8E7j8w-Qx0BG3lm3mIEBqqkU6acv/view?usp=sharing" role="button">View My Resume</a></p>
            </div>
          </div>
        </div>
      </div>
  )
}


export default Intro;