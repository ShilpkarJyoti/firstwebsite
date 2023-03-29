import React from "react";
import { useGlobalContext } from "./Context";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "bootstrap";
import Data from "./Data";


const Service = () => {
    const  { services } =useGlobalContext();
    console.log(services);

    return <Wrapper className="section">
    <h2 className="common-heading"> Our Service</h2>
    <div className="container grid grid-three-column">
        { 
          services.map((curElem)=>{
             const {id, name, image, description }= curElem;
             return(
                <div key={id} className="card">
                <Data/>
                  <figure>
                    <img src={image} alt={name}/>
                  </figure>
                  <div className="card-data">
                  <p>{description}</p>
                  <NavLink to="/services">
                    <Button className="btn">Read More  </Button>
                  </NavLink>
                  </div>
                </div>
             )
            })
        }
    </div>
    </Wrapper>

}
const Wrapper = styled.section``;
export default Service;