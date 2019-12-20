import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
 import styled from 'styled-components';
 import Cockpit from '../components/Cockpit/Cockpit';
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
     
    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
        </div>
      );
    }

    return ( 
      <div className="App">
        <Cockpit showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonHandler}/>
        {persons}
      </div>
    );
  }
}

export default (App);