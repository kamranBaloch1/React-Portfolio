import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { themeContext } from '../Context'
import { useContext } from 'react'
const Experince = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    < >
      <div id="experince" className="container mt-5">
        <Row className="row ">
          <Col className="col-md-3 col-sm-12">
            <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3, type: "spring" }}
            >
              <Circle style={
                darkMode? {color:"black"} : {color:""}}>8+</Circle>
            </motion.div>
            <span  style={
                darkMode? {color:"white"} : {color:"black"}}>Years Experience</span>
          </Col>
          <Col className="col-md-3 col-sm-12">
            <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3, type: "spring" }}
              
            >
              <Circle style={
                darkMode? {color:"black"} : {color:""}}>20+</Circle>
            </motion.div>
            <span style={
                darkMode? {color:"white"} : {color:"black"}}>Completed Projects</span>
          </Col>
          <Col className="col-md-3 col-sm-12">
            <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3, type: "spring" }}
            >
              <Circle style={
                darkMode? {color:"black"} : {color:""}}>5+</Circle>
            </motion.div>

            <span style={
                darkMode? {color:"white"} : {color:"black"}}>Compines Work</span>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Experince;

const Row = styled.div`
  @media (max-width: 1170px) {
    padding: 0px 80px;
  }
`;

const Col = styled.div`
  margin-left: 80px;
  margin-top: 50px;

  @media (max-width: 1170px) {
    margin-left: 0px;
    margin-top: 30px;
  }

  span {
    color: var(--black);
    font-weight: 600;
    font-size: 1.1rem;
    @media (max-width: 1170px) {
      font-size: 1rem;
    }
  }
`;
const Circle = styled.div`
  width: 4rem;
  height: 4rem;
  background: white;
  border-radius: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;

  ::before {
    border-radius: 100%;
    content: "";
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    position: absolute;
    z-index: -1;
    box-shadow: var(--boxShadow);
    background-image: linear-gradient(to bottom, #87e6fb 0%, #ffc05c 100%);
  }
`;
