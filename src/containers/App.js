import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/_Aux';
import withClass from '../hoc/_withClass';

//import WithClass from '../hoc/WithClass';
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';


export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        {id: 'asd1', name: 'Max', age: 28},
        {id: 'bvfr2', name: 'Manu', age: 29},
        {id: 'yuter3', name: 'Stephanie', age: 26}
      ],
      otherState: 'Some other state',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
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

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[App.js] getDerivedStateFromProps', nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[App.js] getSnapshotBeforeUpdate');
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
    // Best practice of mutating State
    this.setState((prevState, props) =>{
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    }
    ); 

  }

  loginHandler= () => {
    this.setState({authenticated: true})

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
      <Aux>        
         <button onClick={()=> {this.setState({showPersons: true})}}>Show Person</button>
          <Cockpit
            appTitle={this.props.appTitle} 
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />
          <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>            
                 
        </Aux>     
    );
  }
}

export default withClass(App, classes.App);
