import React from 'react';

export default props => {
  return (
    <>
      Page Not Found

      <hr />

      With Match : {JSON.stringify(props.match)}

      <hr />

      With Location : {JSON.stringify(props.location)}
    </>
  );
}
