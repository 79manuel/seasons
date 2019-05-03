import React from 'react';

const seasonConfig = {
  winter: {
    text: 'Brrr, it\'s chilly',
    icon: 'snowflake'
  },
  summer: {
    text: 'Let\'s hit the beach',
    icon: 'sun'
  }
};

const getSeason = (lat, month) => {
  if (month < 3 && month > 9) {
    return lat > 0 ? 'winter' : 'summer';
  } else {
    return lat > 0 ? 'summer' : 'winter';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, icon} = seasonConfig[season];
  return (
      <div className={`season-display ${season}`}>
        <i className= {`massive ${icon} icon left-icon`} />
        <h1>{text}</h1>
        <i className= {`massive ${icon} icon right-icon`} />
      </div>
  );
};

export default SeasonDisplay;