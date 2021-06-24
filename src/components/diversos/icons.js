import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    height: auto;
    width: 100px;
    i {
        font-size: 40px;
        margin: 5px;
        cursor:pointer;
    }
    p {
        margin: 0;
    }
    :hover{
        opacity: 0.7;
    }
    
`
const Icon = (props) =>{
    return (
        <Container 
            onClick={()=>props.onClick()}
        >
            <i>{props.icon}</i>
            <p>{props.text}</p>
        </Container>
    )
  }
  
  export default Icon;
