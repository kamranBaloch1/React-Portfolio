import React from 'react'
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import styled from 'styled-components'
import { themeContext } from '../Context'
import { useContext } from 'react'

const Toogle = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const handleClick = ()=>{
      theme.dispatch({
        type:"toggle"
      })
  }
  return (
    <>
       <TooglerBtn onClick={handleClick}>
          
          <Moon/>
          <Sun/>
          <div   style={
            darkMode?{left:"2px"} : {right:"2px"}
          }>

          </div>
         
       </TooglerBtn>
    </>
  )
}

export default Toogle

const TooglerBtn = styled.div`
    
    display: flex;
    justify-content: space-between;
    border: 3px solid var(--orange);
    border-radius: 1rem;
    position: relative;
    padding: 3px;
    cursor: pointer;
    @media(max-width:1170px){
      width: 100px;
    }
    
    *{
        width: 1rem;
        height: 1rem;
        color: var(--orange);
    }
    div{
        border-radius: 100%;
        background:var(--orange);
        position: absolute;
    }
`