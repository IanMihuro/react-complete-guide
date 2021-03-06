import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'asd1', name: 'Max', age: '28'},
      {id: 'bvfr2', name: 'Manu', age: '29'},
      {id: 'yuter3', name: 'Stephanie', age: '26'}
    ],
    otherState: 'Some other state',
    showPersons: false
  }

  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); 

  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            key={person.id} 
            name={person.name} 
            age={person.age} 
            click={()=> this.deletePersonHandler(index)}
            changed={(event)=> this.nameChangedHandler(event, person.id)}
            />
          })}          
        </div> 

      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightyellow',
        color: 'blue'
      }
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm  a react App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>   
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
