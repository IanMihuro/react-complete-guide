import React, {Component} from 'react';
import PropTypes from 'prop-types';


import classes from './Person.css';
import withClass from '../../../hoc/_withClass';
import Aux from '../../../hoc/_Aux';

//import WithClass from '../../../hoc/WithClass';

class Person extends Component {
    constructor(props){ 
        super(props);   
        console.log('[Person.js] Inside Constructor', props);
      }
    
      componentWillMount() {
        console.log('[Person.js] component WILL mount');
      }
    
      componentDidMount() {
        console.log('[Person.js] component DID mount');
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
        
      }
    render() {
        console.log('[Person.js] render()');
        return (
            <Aux>            
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp)=>{this.inputElement = inp}} 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    />           
            </Aux>
            );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

};

export default withClass(Person, classes.Person);