import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        {id: 'asd1', name: 'Max', age: '28'},
        {id: 'bvfr2', name: 'Manu', age: '29'},
        {id: 'yuter3', name: 'Stephanie', age: '26'}
      ],
      otherState: 'Some other state',
      showPersons: false
    }
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] component WILL mount');
  }

  componentDidMount() {
    console.log('[App.js] component DID mount');
  }

  // shouldComponentUpdate( nextProps, nextState) {
  //   console.log('[App.js] shouldComponentUpdate', nextProps, nextState);
  //   // return true;
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }
  

  

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
    console.log('[App.js] render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>         
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
           />
               
        </div> 

      );     
   
    }  

    return (
      <WithClass classes={classes.App}>        
         <button onClick={()=> {this.setState({showPersons: true})}}>Show Person</button>
          <Cockpit
            appTitle={this.props.appTitle} 
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />             
          {persons}       
        </WithClass>     
    );
  }
}

export default App;
