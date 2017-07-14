schema {
  query: Query
  mutation: Mutations
}

type Appointment {
  id: String
  consultant_name: String
  consultant_role: String
  time: String
}

type Query {
  viewer(token: String!): Viewer
}

type Mutations {
  login(email: String!, password: String!): Session
}

type Session {
  id: Int
  guid: String
  token: String!
}

type Viewer {
  appointment(id: Int!): Appointment
}
