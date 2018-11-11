import React from 'react';
import './Output.css';

const renderSteps = (steps) => steps.map((step, i)=><li key={i}>{step}</li>);

const Output = ({steps}) => {
  return (
    <ul className="output">
      {renderSteps(steps)}
    </ul>
  );
};

export default Output;