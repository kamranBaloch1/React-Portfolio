import React from "react";
import styled from "styled-components";
import UilReact from '@iconscout/react-unicons/icons/uil-react'
const FooterSection = () => {
  return (
    <>
      <Container className="container-fluid  mt-5">
      </Container>
    </>
  );
};

export default FooterSection;

const Container = styled.div`
       background-color:var(--orange);
       width: 200%;
       transform: translateX(-45%);
       height: 200px;
       border-radius: 50% 50% 0 0;

       @media(max-width: 1170px){
        width: 135%;
        height: 150px;
        transform: translateX(-25%);
       }

  `

