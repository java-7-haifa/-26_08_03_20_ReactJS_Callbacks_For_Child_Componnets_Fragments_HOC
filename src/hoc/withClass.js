import React from 'react'

const withClass = (Component) => {
    return props => {
        return (
            <div className={props.pid % 2 === 0 ? 'product-card' : 'product-card-odd'}>
                <Component {...props}/>
            </div>
        );
    }
};
export default withClass;