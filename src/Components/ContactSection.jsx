import React,{ useRef,useState }  from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { themeContext } from '../Context'
import { useContext } from 'react'


const ContactSection = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

    const [done, setdone] = useState(false)
    const [name, setname] = useState("")
    const [eamil, setemail] = useState("")
    const [message, setmessage] = useState("")

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0kdjekq', 'template_32tc2w4', form.current, '8j3FkDGRQeqM2Kxmo')
        .then((result) => {
            console.log(result.text);
            setemail("")
            setname("")
            setmessage("")
            setdone(true)

        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <>
      <div id="contact" className="container mt-5">
        <div className="row">
          <LeftCol className="col-md-6  ">
            <span style={
                darkMode? {color:"white"} : {color:""}}>Get in touch</span>
            <br />
            <span>Contact me</span>
          </LeftCol>
          <RightCol className="col-md-6  ">
          {done && 
                <h5 className="mb-4 text-primary text-bold">Thanks for contacting us ...</h5>
              }
            <form ref={form} onSubmit={sendEmail}>
            <div class="mb-4">
                
                <input
                required
                value={name}
                onChange={(e)=>setname(e.target.value)}
                name="user_name"
                placeholder="Name"
                  type="text"
                  class="form-control"
                 
                />
              </div>
              <div class="mb-4">

                <input
                required
                value={eamil}
                onChange={(e)=>setemail(e.target.value)}
                name="email"
                placeholder="Email address"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
            
              </div>

            <div class="mb-3">
            <textarea placeholder="Message" required class="form-control" value={message}
                onChange={(e)=>setmessage(e.target.value)} id="" cols="1" name="message" rows="3"></textarea>
            </div>
              
               <motion.button whileHover={{ scale: 1.2 }}  whileTap={{ scale: 3 }} type="submit" class="btn rounded-pill">
                  Send
              </motion.button>

              
             
            </form>
          </RightCol>
        </div>
      </div>
    </>
  );
};

export default ContactSection;

const LeftCol = styled.div`
  padding: 40px 100px;
  span:nth-child(1) {
    color: var(--black);
    font-weight: 600;
    font-size: 1.9rem;
    @media(max-width: 1170px){
        font-size: 1.2rem;
    }
  }
  span:nth-child(3) {
    color: var(--orange);
    font-weight: 600;
    font-size: 1.9rem;
    @media(max-width: 1170px){
        font-size: 1.2rem;
    }
  }
`;


const RightCol = styled.div`
@media(max-width: 1170px){
            padding:0px 30px;
    }
    
    input{
        border:2px solid var(--orange);
        width:400px;
        @media(max-width: 1170px){
            width:280px;
    }
    }
    textarea{
        border:2px solid var(--orange);
        width:400px;
        @media(max-width: 1170px){
            width:280px;
    }

    }
    button {
    width: 90px;
    background-color: var(--orange);
    color: white;
    font-size:0.9rem;
    box-shadow: 5px 10px whitesmoke;
    margin: 0px 10px;
    &:hover {
      background-color: var(--yellow);
      
    }
   
  }
`