import React from 'react';
import './Output.css';

const renderSteps = (steps) => steps.map((step)=><li>{step}</li>);

const Output = ({steps}) => {
  return (
    <ul>
      {renderSteps(steps)}
    </ul>
  );
};

export default Output;