import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Components/Persons/Person.js';
 import styled from 'styled-components';
//import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state={
    persons: [
      {id:1, name: "Max", age:25},
      {id:2, name: "manu", age:75},
      {id:3, name: "stphen", age:24}
    ],
    showPersons:false
  }

    nameChangedHandler = (event,id ) => {
      const personIndex=this.state.persons.findIndex(p => {
        return p.id===id;
      });

      const person ={
        ...this.state.persons[personIndex]
      };

      person.name=event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      
     this.setState({persons: persons })
    }

    togglePersonHandler =()=>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons:!doesShow});
    }

    deletePersonHandler = (personIndex) =>{
      //const persons=this.state.persons.slice();
      const persons=[...this.state.persons]; //Es6
      persons.splice(personIndex,1);
      this.setState({persons:persons}); 
    }
  render() {
     const StyledButton = styled.button` //creating a styled button using styled-components
       background-color: ${props => props.alt ? "red": "green"};
       &:hover {
         background-color: ${props => props.alt ? "salmon": "lightGreen"};
         color: black;
       }
     `;

    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
          {
            this.state.persons.map( (person, index)  =>{
              return <Person click={() => this.deletePersonHandler(index)} 
              name={person.name} age={person.age} 
              changed={(event) => this.nameChangedHandler(event, person.id)}
              key={person.id}/>
            })
          }
        </div>
      );
      /*style.backgroundColor= "red";
      style[":hover"]={
        backgroundColor: "salmon",
        color: "black"
      }*/
    }

    const classes= [];
    if(this.state.persons.length <=2){
      classes.push("red"); //classes=["red"]
    }
    if(this.state.persons.length <=1){
      classes.push(" bold"); //classes=["red", "bold"]; 
    }
    

    return (
     // <StyleRoot> 
      <div className="App">
        <h1 >Hi yash!!</h1>
        <p className={classes.join('')}>This is working</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Person</StyledButton>
        {/* <button  onClick={this.togglePersonHandler}>Toggle Person</button> */}
        {persons}
      </div>
      //</StyleRoot>
    );
  }
}

export default (App);
