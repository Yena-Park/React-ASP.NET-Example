import React from 'react';
import './Output.css';

const renderSteps = (steps) => steps.map((step, i)=><li key={i}>{step}</li>);

const Output = ({steps, error}) => {
  return (
    <div className="output">
      {steps && (
        <ul>
          {renderSteps(steps)}
        </ul>
      )}
      {error && (<div>{error}</div>)}
    </div>
  );
};

export default Output;