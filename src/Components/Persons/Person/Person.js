import React from 'react';
//import Radium from 'radium';
 import "./Person.css";
import styled from 'styled-components';

 const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid white;
    box-shadow: 0 2px 3px gray;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px){
       width: 450px;
     }
 `;

const person = (props) => {
    //  const style ={
    //     "@media (min-width: 500px)":{
    //        width: '450px'
    //    }}
   

    return (  
       <StyledDiv>
            <p onClick={props.click}>Hi I am {props.name} and I am {props.age} year</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
         </StyledDiv> 
    );
         
    
};

export default person;