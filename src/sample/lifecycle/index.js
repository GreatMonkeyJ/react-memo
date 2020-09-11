import React from 'react';

import { WithWillUnmount } from '../hoc';

class SampleLifeCycle extends React.Component {
  state = {
    name: 'Lifecycle',
    isUpdated: 'Not yet!'
  }

  // Static LifeCycle
  static getDerivedStateFromProps(props, state) {
    console.log('%c getDerivedStateFromProps', 'color: #bada55');
    console.log('props', props);
    console.log('state', state);

    return null;
  }

  // Mounting
  componentDidMount() {
    console.log('%c componentDidMount', 'color: #bada55');
  }

  // Update
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%c shouldComponentUpdate', 'color: #bada55');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);

    if (this.state.isUpdated !== nextState.isUpdated) {
      return true;
    }

    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('%c getSnapshotBeforeUpdate', 'color: #bada55');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('%c componentDidUpdate', 'color: #bada55');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

  // Unmounting
  componentWillUnmount() {
    console.log('%c componentWillUnmount', 'color: #bada55');
  }

  // Error
  // static getDerivedStateFromError(error) {
  //  console.log('getDerivedStateFromError');
  // }

  // componentDidCatch() {
  //   console.log('componentDidCatch');
  // }

  updateHandler = () => {
    this.setState({
      isUpdated: 'Update!!!'
    });
  }

  render() {
    console.log('%c Render', 'color: #fff000');

    return (
      <React.Fragment>
        <h3>{this.props.name}</h3>
        <p>isUpdated: {this.state.isUpdated}</p>
        <button type="button" onClick={this.updateHandler}>Update!!!</button>
      </React.Fragment>
    )
  }
}

export default WithWillUnmount(SampleLifeCycle);
