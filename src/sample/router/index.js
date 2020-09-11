import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SampleHistory from './history';
import SampleLocation from './location';
import SampleMatch from './match';

const SampleRouter = props => {
  return (
    <div>
      <h3>Sample Router</h3>

      <hr />

      <div>
        <h3>Nested Route</h3>
        <Switch>
          <Route path={`${props.match.path}/history`} component={SampleHistory}/>
          <Route path={`${props.match.path}/location`} component={SampleLocation} />
          <Route path={`${props.match.path}/:id`} component={SampleMatch} />
        </Switch>
      </div>
    </div>
  );
};

export default SampleRouter;