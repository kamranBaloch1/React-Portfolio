import React from "react";
import styled from "styled-components";
import BoyImg from "../../src/img/boy.png";
import Facebook from "../../src/img/Facebook.png";
import Github from "../../src/img/github.png";
import Instagram from "../../src/img/instagram.png";
import { motion } from "framer-motion";
import { themeContext } from '../Context'
import { useContext } from 'react'


const IntroCompo = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <>
      <div id="intro" className="container mt-5">
        <div className="row">
          <LeftCol className="col-md-6">
            <span style={
                darkMode? {color:"white"} : {color:"#242D49"}} >Hy! I AM</span>
            <br />
            <motion.span style={
                darkMode? {color:"white"} : {color:""}}>Virat Baloch</motion.span>
            <motion.p
              style={
                darkMode? {color:"white"} : {color:""}}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              reprehenderit laborum perspiciatis culpa ullam, dolore accusantium
            </motion.p>
            <motion.button whileHover={{ scale: 1.2 }}  whileTap={{ scale: 3 }} className="btn  rounded-pill">Hire me</motion.button>

            <IconsRow className="mt-5">
              <div>
                <img src={Github} alt="" srcset="" />
              </div>

              <div>
                <img src={Instagram} alt="" srcset="" />
              </div>
              <div>
                <img src={Facebook} alt="" srcset="" />
              </div>
            </IconsRow>
          </LeftCol>

          {/* This is the right side */}
          <div className="col-md-6">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 2 }}
              src={BoyImg}
              alt=""
              srcset=""
            />

            <Blur style={{ background: "rgb(238 210 255)" }}></Blur>
            <Blur style={{ background: "#C1F5FF" }}></Blur>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroCompo;

const LeftCol = styled.div`
  span {
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--orange);
  }
  p {
    font-size: 0.9rem;
    color: var(--gray);
  }

  button {
    width: 200px;
    background-color: var(--orange);
    color: white;
    box-shadow: 4px 4px whitesmoke;
    &:hover {
      background-color: white;
      color: var(--orange);
    }
    @media (max-width: 1170px) {
      width: 100px;
    }
  }
`;

const IconsRow = styled.div`
  display: flex;
  flex-direction: row;

  img {
    transform: scale(0.5);
  }
`;

const Blur = styled.div`
  position: absolute;
  width: 22rem;
  height: 14rem;
  border-radius: 50%;
  background: #edd0ff;
  z-index: -9;
  top: -18%;
  left: 56%;
  filter: blur(72px);

  @media (max-width: 1170px) {
    width: 7rem;
    height: 14rem;
  }
`;
