import React from 'react';
import "./about.css";
import AboutImg from "../../assets/abaut.jpg";
import Info from './Info';


const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info />

                <p className="about__description">I'm studying at Saliymbekov University 
                in my second year.I've been developing various 
                applications and websites for 2 years and have many happy clients.</
                p>

                
            </div>


        </div>
    </section>
  );
};

export default About;
