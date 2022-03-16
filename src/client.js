import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "apollo-boost"

const  GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
const uri = 'https://api.github.com/graphql'

const headersLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`
    }
  })
  return forward(operation)
})


const httpLink = new HttpLink({uri})
const link = ApolloLink.from([headersLink, httpLink])

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
})