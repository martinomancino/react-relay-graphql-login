import React, { Component } from 'react';
import LoginFormContainer from './containers/loginFormContainer';
import environment from './Environment'
import './App.css';

import {
  graphql,
  QueryRenderer
} from 'react-relay'

const Query = graphql`
  query AppQuery($id: Int!, $token: String!) {
    viewer(token: $token) {
      appointment(id: $id) {
        id
      }
    }
  }
`

class App extends Component {
  render() {
    return <QueryRenderer
      environment={environment}
      query={Query}
      variables={{}}
      render={
        ({ error, props }) => {
          return (
            <div className="App">
              <LoginFormContainer />
            </div>
          )
        }
      }
    />
  }
}

export default App;
