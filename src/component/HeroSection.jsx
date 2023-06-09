import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { Button } from "../Styles.jsx/Button";

const HeroSection = () =>{
    const { name,image } = useGlobalContext();
    return (
    <Wrapper>
       <div className="container grid grid-two-column">
         <div className="section-hero-data">
            <p className="hero-top-data">THIS IS ME</p>
            <h1 className="hero-heading">{name}</h1>
            <p className="hero-para"> I'm { name }.A full-stack developer helps build and maintain both the front-end and the back-end of a website. Learn about full-stack developer skills, salary, and how you can become one.</p>
         <Button className="btn hireme-btn">
            <NavLink to="/contact">Hire me</NavLink>
         </Button>
         </div>

         {/**for image */}
         <div className="section-hero-image">
            <picture>
                <img src={image} alt="hero img" className="hero-img"/>
            </picture>
         </div>
       </div>
    </Wrapper>
    );
};
const Wrapper =styled.section`
  padding: 9rem 0;
  
 .section-hero-data{
     display: flex;
     flex-direction: column;
     justify-content: center;
     }
  .btn{
    max-width: 16rem;
    }
    .hero-top-data{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 2.3rem;
        color:${({theme}) => theme.colors.helper};
    }
    .hero-heading{
        text-transform: uppercase;
        font-size: 7.4rem;
    }
    .hero-para{
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 70rem;
    }
    .section-hero-image{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    picture{
        text-align: center;
    }
    .hero-img{
        max-width: 80%;
    }


`;
export  default HeroSection