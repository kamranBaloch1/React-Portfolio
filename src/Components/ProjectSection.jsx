import React from "react";


import musicImg from "../../src/img/musicapp.png";
import ecomarce from "../../src/img/ecommerce.png";
import hoc from "../../src/img/hoc.png";
import styled from "styled-components";
import { themeContext } from '../Context'
import { useContext } from 'react'

const ProjectSection = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <>
      <Container id="portfolio" className="container mt-4">
        <div className="row">

          <div className="col-md-8 mx-auto projects">
             <center>
             <h3 style={
                darkMode? {color:"white"} : {color:"#242D49"}}>Recent Projects</h3>
              <h4>Portfolio</h4>
             </center>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={ecomarce} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={musicImg} className="d-block w-100" alt="..." />
                </div>
              
     
                <div className="carousel-item">
                  <img src={hoc} className="d-block w-100" alt="..." />
                </div>
                
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
             
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProjectSection;

const Container = styled.div`
h3{
    font-size:1.9rem;
    font-weight:600;
    color: var(--black);
    @media(max-width: 1170px) {
        font-size:1.6rem;
    }
  
}
h4{
    font-size:1.8rem;
    font-weight:600;
    color: var(--orange);
    @media(max-width: 1170px) {
        font-size:1.3rem
    }
   
    margin-bottom:40px;
}
  img {
    width: 100%;
    height: 280px;
    @media(max-width: 1170px) {
        height: 180px;
        padding:10px;
    }
  }
`;
