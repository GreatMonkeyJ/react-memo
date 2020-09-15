import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route, Redirect, NavLink, Link } from 'react-router-dom';

// CSS Module
import Classes from './App.module.scss';

// Sample
import { Aux } from './sample/hoc';
import { ClassComponent, FunctionalComponent } from './sample/components';
import SampleLifeCycle from './sample/lifecycle';
import SampleHooks from './sample/hooks';
import SampleRouter from './sample/router';

import SampleRedux from './sample/redux';

class App extends React.Component {
  render() {
    return (
      <div className={Classes.App}>
        <h3>NavLink</h3>
        <nav className={Classes.Nav}>
          <NavLink to="/" exact activeClassName={Classes.Active}>Home</NavLink>
          <span> | </span>
          <NavLink to="/redux" activeClassName={Classes.Active}>Redux</NavLink>
          <span> | </span>
          <NavLink to="/sample-router/history" activeClassName={Classes.Active}>SampleHistory</NavLink>
          <span> | </span>
          <NavLink to="/sample-router/location" activeClassName={Classes.Active}>SampleLocation</NavLink>
          <span> | </span>
          <NavLink to="/sample-render" activeClassName={Classes.Active}>Sample Render</NavLink>
        </nav>

        <hr />

        <h3>Link</h3>
        <div>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/redux">Redux</Link>
          <span> | </span>
          <Link to="/sample-router/history">SampleHistory</Link>
          <span> | </span>
          <Link to="/sample-router/location">SampleLocation</Link>
          <span> | </span>
          <Link to="/sample-render">Sample Render</Link>
        </div>

        <hr />

        <Switch>
          <Route path="/redux" component={SampleRedux}/>
          <Route path="/sample-render" render={() => (<h3>Sample Render</h3>)} />
          <Route path="/sample-router" component={SampleRouter} />
          <Route path="/" exact>
            <Aux>
              <ClassComponent name="Class" />
              <FunctionalComponent name="Functional" />

              <hr />

              <SampleLifeCycle name="Lifecycle" />

              <hr />

              <SampleHooks name="Hooks" />
            </Aux>
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
