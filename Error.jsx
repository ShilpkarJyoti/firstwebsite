import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./src/Styles.jsx/Button";

const Error=()=>{
  const Wrapper = styled.section`
  padding: 8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn{
    font-size: 1.8rem;
    margin-top: 3rem;
  }
  `;
    return<>
      <Wrapper>
            <img src="public\images\error.svg" alt="error"/>
            <NavLink to="/">
            <Button className="btn">Go Back</Button>
            </NavLink>
      </Wrapper>
    </>;

    
}

export default Error;