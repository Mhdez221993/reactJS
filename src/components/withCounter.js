import React, { Component } from 'react';

const withCounter = WrappedComponent => {

  class WithCounter extends Component {
    constructor(props) {
      super(props)

      this.state = {
         count: 0
      }
    }

    incrementCounter = () => {
      this.setState(prevState => ({count: prevState.count + 1}))
    }

    render() {

      return <WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter} name='Doe' />
    }
  }

  return WithCounter
};

export default withCounter;