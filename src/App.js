import React from 'react';
import { Switch, Route } from 'react-router-dom';

// HOC
import Layout from './hoc/Layout/Layout';
import NoMatch from './hoc/NoMatch/Nomatch';

// Style
import './App.scss';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/about' render={() => (<h1>About</h1>)}></Route>
        <Route path='/' render={() => (<h1 style={{padding: '100px 0', textAlign: 'center'}}>React Memo</h1>)}></Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
