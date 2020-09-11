import React from 'react';

const SampleMatch = props => {
  const { match } = props;

  return (
    <div>
      <h3>Match</h3>
      <p>{JSON.stringify(match)}</p>
    </div>
  )
}

export default SampleMatch;