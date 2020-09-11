import React from 'react';

const SampleHistory = props => {
  const { history } = props;

  return (
    <div>
      <h3>History</h3>

      <button type="button" onClick={() => history.push('/')}>push('/')</button>
      <button type="button" onClick={() => history.go(-1)}>Go(-1)</button>
      <button type="button" onClick={() => history.goBack()}>GoBack()</button>

      <p>{JSON.stringify(history)}</p>
    </div>
  );
};

export default SampleHistory;