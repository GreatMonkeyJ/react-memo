import React from 'react';

const SampleLocation = (props) => {
  const { location } = props;
  return (
    <div>
      <h3>Location</h3>
      <p>{JSON.stringify(location)}</p>
    </div>
  );
}

export default SampleLocation;