import React from 'react';

export const Aux = props => props.children;

export const WithWillUnmount = (C, ...args) => {
  return class extends React.Component {
    state = {
      willUnmount: false
    }

    willUnmountHandler = () => {
      this.setState({
        willUnmount: !this.state.willUnmount
      });
    }

    render() {
      let WrappedComponent;

      if (!this.state.willUnmount) {
        WrappedComponent = (
          <C {...this.props}>
            {this.props.children}
          </C>
        )
      } else {
        WrappedComponent = null;
      }

      return (
        <div>
          {WrappedComponent}
          <button type="button" onClick={this.willUnmountHandler}>
            {!this.state.willUnmount
              ? 'UnMount'
              : 'Mount'
            }
          </button>
        </div>
      );
    }
  }
}
