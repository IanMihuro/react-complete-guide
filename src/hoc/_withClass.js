import React, { Component } from 'react';

// const _withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//         <WrappedComponent {...props}/>
//         </div>
//     );
// }
const _withClass = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            );
        }
    }
}
export default _withClass;