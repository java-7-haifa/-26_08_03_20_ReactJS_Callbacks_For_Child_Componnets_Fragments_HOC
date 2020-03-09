import React from "react";
import Counter from "./Counter";
import withClass from "../hoc/withClass"

const Product  = props => {
    
    let addHandler = () => {
        props.onAdd(props.pid);
    }

    let subHandler = () => {
        props.onSub(props.pid);
    }
  return (
    <>
      <h3 className="title">{props.title}</h3>
      <p className="price">{props.price}</p>
      {props.count ? <Counter 
                        onAdd={addHandler}
                        onSub={subHandler}
                        count={props.count} /> 
                    : <button className="add-btn" onClick={()=>props.addToCart(props.pid)}>Add</button>}
    </>
  );
};

export default withClass(Product);