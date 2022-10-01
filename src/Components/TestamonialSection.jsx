import React from "react";
import styled from "styled-components";
import "./Own.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../src/img/profile1.jpg";
import img2 from "../../src/img/profile2.jpg";
import img3 from "../../src/img/profile3.jpg";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { themeContext } from '../Context'
import { useContext } from 'react'

const TestamonialSection = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const clinets = [
    {
      img: img3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis saepe aliquam recusandae iure!",
    },
    {
      img: img2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis saepe aliquam recusandae iure!",
    },
    {
      img: img1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis saepe aliquam recusandae iure!",
    },
  ];
  return (
    <>
      <Container id="testimoni" className="conatiner mt-5 ">
        <div className="row">
          {
            <center>
              <h2 style={
                darkMode? {color:"white"} : {color:""}}>
                Clinet always get <span> Exceptional Work</span> from me
              </h2>
            </center>
          }

          <div className="col-md-6 mx-auto mt-3">
            <Swiper
              className="swiper"
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {clinets.map((val, index) => {
                return (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <Testi  style={
                darkMode? {background:"#FCA61F"} : {background:""}} className="testi">
                      <img src={val.img} alt="" srcset="" />
                      <h6  style={
                darkMode? {color:"white"} : {color:""}}>{val.review}</h6>
                    </Testi>
                  

                  </SwiperSlide>
                );
              })}
            </Swiper>
            
          </div>
           
        </div>
      </Container>
    </>
  );
};

export default TestamonialSection;

const Container = styled.div`
  h2 {
    font-size: 1.6rem;
    color: var(--black);
    font-weight: 600;

    @media (max-width: 1170px) {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
  span {
    font-size: 1.6rem;
    color: var(--orange);
    font-weight: 600;
    @media (max-width: 1170px) {
      font-size: 1.1rem;

      font-weight: 500;
    }
  }
`;

const Testi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  width: 30rem;
  height: 12rem;
  background: rgba(163, 27, 27, 0.26);
  box-shadow: var(--boxShadow);
  border-radius: 20px;
  @media (max-width: 1170px) {
    width: 17rem;
    
    margin: 0px 10px;
    }

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
    @media (max-width: 1170px) {
        width: 4rem;
    height: 4rem;
    }
  }

  h6 {
    margin: 10px 0px;
    color: black;
    font-size: 0.9rem;
    @media (max-width: 1170px) {
        font-size: 0.7rem;
    }
  }
`;
