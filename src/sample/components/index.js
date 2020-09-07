import React from 'react';

// HOC
import { Aux } from '../hoc';

export class ClassComponent extends React.Component {
  render() {
    return (
      <Aux>
        <h3>This is {this.props.name + this.props.postfix}</h3>
      </Aux>
    )
  }
}

ClassComponent.defaultProps = {
  postfix: 'Component'
};

export const FunctionalComponent = (props) => {
  return (
    <Aux>
      <h3>This is {props.name + props.postfix}</h3>
    </Aux>
  )
}

FunctionalComponent.defaultProps = {
  postfix: 'Component'
};
