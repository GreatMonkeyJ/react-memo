import React from 'react';
import { Provider } from 'react-redux';

// store
import store from './store';

import SampleTodos from './SampleTodos';

class SampleRedux extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SampleTodos />
      </Provider>
    );
  }
}

export default SampleRedux;
