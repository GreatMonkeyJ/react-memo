import React from 'react';

import Classes from './App.css';

// Sample
import { Aux } from './sample/hoc';
import { ClassComponent, FunctionalComponent } from './sample/components';
import LifeCycleComponent from './sample/lifecycle';
import Hooks from './sample/hooks';

class App extends React.Component {
  render() {
    return (
      <div className={Classes.App}>
        <Aux>
          <ClassComponent name="Class" />
          <FunctionalComponent name="Functional" />
          <LifeCycleComponent name="Lifecycle"/>
          <Hooks name="Hooks"/>
        </Aux>
      </div>
    );
  }
}

export default App;
