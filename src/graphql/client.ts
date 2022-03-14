import { GraphQLClient } from 'graphql-request'
const API_GRAPHQL = process.env.GRAPHQL_HOST

const client = new GraphQLClient(`${API_GRAPHQL}`)

export default client
