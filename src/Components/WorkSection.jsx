import React from "react";
import styled from "styled-components";
import ShopifyImg from "../../src/img/Shopify.png"
import fiverImg from "../../src/img/fiverr.png"
import upworkImg from "../../src/img/Upwork.png"
import facebookImg from "../../src/img/Facebook.png"
import { motion } from "framer-motion";
import { themeContext } from '../Context'
import { useContext } from 'react'

const WorkSection = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <LeftCol className="col-md-6 col-sm-12">
            <span >Works for All these</span>
            <br />
            <span>Brands & Clients</span>
            <p style={
                darkMode? {color:"white"} : {color:""}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              quisquam! Sed, illum natus optio possimus nesciunt eum. Magni esse
              eius mollitia, tempora ea explicabo. Est odit vero eum vitae fuga?
            </p>
            <motion.button whileHover={{ scale: 1.2 }}  whileTap={{ scale: 3 }} className="btn  rounded-pill">Hire me</motion.button >
          </LeftCol>

       <Col className="col-md-6 col-sm-12 ">
               
               <div className="" >
                   <img src={facebookImg} alt="" />
               </div>
               <div className="" >
                   <img src={fiverImg} alt="" />
               </div>
               <div className="" >
                   <img src={upworkImg} alt="" />
               </div>
               <div className="" >
                   <img src={ShopifyImg} alt="" />
               </div>
       </Col>
          
        </div>
      </div>
    </>
  );
};

export default WorkSection;

const LeftCol = styled.div`
  span:nth-child(1) {
    color: var(--dark);
    font-weight: 600;
    font-size: 2rem;
    @media(max-width: 1170px) {
        font-size: 1.5rem;
}

  }
  span:nth-child(3) {
    color: var(--yellow);
    font-weight: 600;
    font-size: 1.7rem;
    @media(max-width: 1170px) {
        font-size: 1.2rem;
}
  }
  p{
    margin:15px 0px;
    color: var(--gray);
    font-weight: 400;
    font-size: 0.9rem;
    @media(max-width: 1170px) {
        font-size: 0.8rem;
}
  }
  button {
    width: 200px;
    background-color: var(--orange);
    color: white;
    box-shadow: 5px 10px whitesmoke;
    &:hover {
      background-color: white;
      color: var(--orange);
    }
    @media (max-width: 1170px) {
      width: 140px;
      font-size: 0.7rem;
    }
  }
`;


const Col= styled.div`

display:flex;
flex-direction:row;
gap: 2rem;
padding: 80px 100px;
@media(max-width: 1170px) {
    padding: 40px 20px; 
}


  img{
    width: 50px;
    height: 50px;
    @media(max-width: 1170px) {
    width: 30px;
    height: 30px;
}

  }

`