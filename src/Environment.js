import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime'
import axios from 'axios'

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
  console.log(operation, variables)

  return axios({
    url: 'http://5c4d9db8.ngrok.io/graphql',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.data
  })
})

const env = new Environment({
  network,
  store
})

export default env