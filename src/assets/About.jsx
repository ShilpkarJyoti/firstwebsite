import React, { useEffect } from "react";
import HeroSection from "../component/HeroSection";
import { useGlobalContext } from "../Context";

const About = () => {
    const {updateAboutPage}= useGlobalContext();

    useEffect(()=> updateAboutPage(), []);

    return <HeroSection />;
};

export default About;