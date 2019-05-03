import React from 'react';

const Error = (props) => {
  return (
      <div className='block'>
        <div className="ui big negative message">
          <div className="header">
            Error:
          </div>
          <p>{props.text}</p>
        </div>
      </div>
  );
};

export default Error;