import React from 'react'
import styled from 'styled-components'
import HeratEmoji  from '../../src/img/heartemoji.png'
import glasses from "../../src/img/glasses.png";
import HumbleEmoji from "../../src/img/humble.png";
import { motion } from "framer-motion";
import { themeContext } from '../Context'
import { useContext } from 'react'


const ServicesCompo = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <>
       
       <Container id='services' className='container  mt-5'>
          <div className='row'>
            <RightCol className='col-md-12  col-sm-12'>
                <span style={
                darkMode? {color:"white"} : {color:""}}>My Awesome</span>
                <br/>
                <span>Services</span>
                <p style={
                darkMode? {color:"white"} : {color:""}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis maxime nesciunt culpa.
                </p>
                <motion.button whileHover={{ scale: 1.2 }}  whileTap={{ scale: 3 }} className='btn rounded-pill'>Download CV</motion.button>
            </RightCol>
          </div>

          {/* service cards */}

          <Row2 className='row mt-5 ' >

            <Col2 className='col-md-3 '>
                  <center>
                  <motion.img whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 3 }}
                    src={HeratEmoji} alt="" srcset="" />
                  <h4>Design</h4>
                  <p>Figma , Adobe , Photoshop</p>
                 
                  <motion.button whileHover={{ scale: 1.2 }}  whileTap={{ scale: 3 }} className='btn btn-outline-primary mt-3 rounded-pill'>Learn more</motion.button>
                  </center>
            </Col2>
            <Col2 className='col-md-3 '>
                  <center>
                  <motion.img  whileHover={{ scale: 1.2 }}  whileTap={{ scale: 3 }} src={glasses} alt="" srcset="" />
                  <h4>Developer</h4>
                  <p>React , Javascripy , Python</p>
                  <motion.button whileHover={{ scale: 1.2 }}  whileTap={{ scale: 3 }} className='btn btn-outline-primary mt-3 rounded-pill'>Learn more</motion.button>
                  </center>
            </Col2>
            <Col2 className='col-md-3 '>
                  <center>
                  <motion.img whileHover={{ scale: 1.2 }}  whileTap={{ scale: 3 }} src={HumbleEmoji} alt="" srcset="" />
                  <h4>Ul/UX</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit </p>
                    <motion.button whileHover={{ scale: 1.2 }}  whileTap={{ scale: 3 }} className='btn btn-outline-primary mt-3 rounded-pill'>Learn more</motion.button>
                  </center>
            </Col2>
           
          </Row2>


       </Container>

       
    
    </>
  )
}

export default ServicesCompo


const Container= styled.div`

 
`

const RightCol = styled.div`
    
    margin-left:50px;
    @media(max-width: 1170px){
        margin-left:0px;
    }
      
      span{
        font-weight:400
      }

  
      span:nth-child(1){
          font-size:2.2rem;
          color:var(--black);
      }
      span:nth-child(3){
          font-size:2.1rem;
          color:var(--orange);
          font-weight:500
      }
      p{
        font-size:0.9rem;
        color: var(--gray);
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
      width: 150px;
    }
  }

`;



const Row2 = styled.div`
      @media(max-width: 1170px){
     padding:0px 30px;
    
}

`


const Col2 = styled.div`

   border: solid 4px var(--orangeCard);
   border-radius:20px;
   padding: 20px;
   margin:0px 30px;

   @media(max-width: 1170px){
    margin:10px 0px;
    
}
    
    img{
        width: 110px;
        height:110px;
    }
    button{
        font-size:18px
    }

`
