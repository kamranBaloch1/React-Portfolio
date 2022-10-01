import React from "react";
import styled from "styled-components";
import Toogle from "./Toogle";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { themeContext } from '../Context'
import { useContext } from 'react'

const Navbar = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <>
      <NavbarM 
       style={
        darkMode? {background:"black"} : {background:"white"}}
      className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <NavbarTitle  style={
                    darkMode? {color:"white"} : {color:"black"}} className="navbar-brand" href="#">
            Kamran Baloch
          </NavbarTitle>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul 
             
             className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="#">
                  <Toogle />
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="intro"
                  spy={true}
                  smooth={true}
                  style={
                    darkMode? {color:"white"} : {color:"black"}}
                  className="nav-link"
                  aria-current="page"
                  href=""
                 
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                 style={
                  darkMode? {color:"white"} : {color:"black"}}
                  to="services"
                  spy={true}
                  smooth={true}
                  className="nav-link "
                  href=""
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                 style={
                  darkMode? {color:"white"} : {color:"black"}}
                  to="experince"
                  spy={true}
                  smooth={true}
                  className="nav-link "
                  href=""
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                 style={
                  darkMode? {color:"white"} : {color:"black"}}
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  className="nav-link "
                  href=""
                >
                  Protfolio
                </Link>
              </li>
              <li className="nav-item">

                <Link
                 style={
                  darkMode? {color:"white"} : {color:"black"}}
                  to="testimoni"
                  spy={true}
                  smooth={true}
                  className="nav-link "
                  href=""
                >
                  Testimonial
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <Link to="contact" spy={true} smooth={true}>
                {" "}
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 3 }}>
                  {" "}
                  <NavbarBtn className="btn rounded  rounded-pill">
                    Contact
                  </NavbarBtn>
                </motion.div>
              </Link>
            </ul>
          </div>
        </div>
      </NavbarM>
    </>
  );
};

export default Navbar;

const NavbarM = styled.div`
  background-color: white;
`;

const NavbarBtn = styled.button`
  background-color: var(--orange);
  color: white;
  &:hover {
    background-color: white;
    color: var(--orange);
  }
`;

const NavbarTitle = styled.a`
  margin-left: 40px;
  @media (max-width: 1170px) {
    margin-left: 0px;
    
  }
`;
