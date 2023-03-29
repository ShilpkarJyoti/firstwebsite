import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles.jsx/Button";

const Footer = () => {
    const Wrapper =styled.section`
    .contact-short{
    max-width: 10vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({theme}) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({theme}) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div: last-child{
        justify-self: end;
        align-self: center;
    }    
}
    footer {
        padding: 14rem 0 9rem 0;
        backgroun-color: ${({theme}) => theme.colors.footer_bg};
    }

    `;

    return (
        <Wrapper>
          <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
                <h3> Ready to get started?</h3>
                <h3>Talk to us today</h3>
            </div>
            <div>
                <NavLink to="/">
                    <Button>Get started</Button>
                </NavLink>
            </div>
            </div>
            <Footer/>
            </section>
        {/*footer section*/}
        <footer>+
            <div className="container grid grid-four-column">
                <div className="footer-about">
                <h3>RESITE WEB</h3>
                <p>Loreum ipsum dolor,sit amet consectur adipiscing elit.</p>


                </div>
            </div>
        </footer>

        </Wrapper>
    )
}
export default Footer;