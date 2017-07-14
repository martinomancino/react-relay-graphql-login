import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { commitMutation, graphql } from 'react-relay'
import environment from '../../Environment'

const mutation = graphql`
  mutation LoginFormMutation(
    $email: String!,
    $password: String!
  ) {
    login(email: $email, password: $password) {
      token
    }
  }
`

class LoginForm extends React.Component{
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.login = this.login.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateEmail(e) {
    this.setState({email: e.target.value})
  }
  
  updatePassword(e) {
    this.setState({password: e.target.value})
  }
  
  login(e) {
    commitMutation(
      environment,
      {
        mutation,
        variables: this.state,
        onCompleted: (response) => {
          console.info('Response:', response);
        },
        onError: (error) => {
          console.error('Error:', error)
        }
      }
      
    )
  }

  render () {
    return (
      <Form onSubmit={this.login}>
        <Form.Input label='Email' placeholder='your@email' onChange={this.updateEmail}/>
        <Form.Input label='Password' type='password' placeholder='password' onChange={this.updatePassword}/>
        <Button type='submit'>Sign in</Button>
      </Form>
    )
  }
}

export default LoginForm;
