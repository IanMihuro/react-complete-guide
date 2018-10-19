import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props){ 
    super(props);   
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] component WILL mount');
  }

  componentDidMount() {
    console.log('[Persons.js] component DID mount');
  }

  // shouldComponentUpdate( nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons || 
  //   nextProps.changed !== this.props.changed || 
  //   nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  render() {
    console.log('[Persons.js] render()');
    return this.props.persons.map((person, index) => {       
     return <Person
        key={person.id}
        name={person.name} 
        age={person.age} 
        click={()=> this.props.clicked(index)}
        changed={(event)=> this.props.changed(event, person.id)}
      />      
  });
  }
} 



export default Persons;