import { ApolloProvider, Query } from 'react-apollo';
import client from './client'
import { ME, SERCH_REPO } from './graphql'

const VARIABLES = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンドエンジニア"
}
function App() {
  const {first, after, last, before, query} = VARIABLES
  return (
    <ApolloProvider client={client}>
      <div >
        a
      </div>
      <Query query={SERCH_REPO} variables={{first, after, last, before, query}}>
        {
          ({ loading, error, data }) => {
            if (loading) return 'loading...'
            if (error) return `${error.message}`
            console.log(data)
            return <div></div>
          }
        }
      </Query>
    </ApolloProvider>
  );
}

export default App;
