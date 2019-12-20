import React from 'react';
import styled from 'styled-components';

const cockpit = props => {
    const StyledButton = styled.button` //creating a styled button using styled-components
       background-color: ${props => props.alt ? "red": "green"};
       &:hover {
         background-color: ${props => props.alt ? "salmon": "lightGreen"};
         color: black;
       }
     `;

    const classes= [];
    if(props.persons.length <=2){
      classes.push("red"); //classes=["red"]
    }
    if(props.persons.length <=1){
      classes.push(" bold"); //classes=["red", "bold"]; 
    }

    return (
        <div>
            <h1 >Hi yash!!</h1>
            <p className={classes.join('')}>This is working</p>
            <StyledButton alt={props.showPersons} onClick={props.clicked}>Toggle Person</StyledButton>
        </div>
    )
}

export default cockpit;