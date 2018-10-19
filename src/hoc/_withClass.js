import React from 'react';

const _withClass = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
        <WrappedComponent />
        </div>
    );
}

export default _withClass;