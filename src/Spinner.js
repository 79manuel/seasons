import React from 'react';

const Spinner = () => {
  return(
        <div className = "ui segment spinner">
          <div className = "ui active dimmer">
            <div className = "ui text loader"> Please let us know your location... </div>
          </div>
        </div>
  )
};

export default Spinner;