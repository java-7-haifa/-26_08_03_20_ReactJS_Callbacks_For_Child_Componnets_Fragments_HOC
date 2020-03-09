import React from "react";

export default props => {
  return (
    <div className='counter'>
      <button onClick={props.onSub}>-</button>
      <span>{props.count || 0}</span>
      <button onClick={props.onAdd}>+</button>
    </div>
  );
};
