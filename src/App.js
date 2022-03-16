import { ApolloProvider, Query } from 'react-apollo';
import client from './client'
import { ME } from './graphql'


function App() {
  return (
    <ApolloProvider client={client}>
      <div >
        a
      </div>
      <Query query={ME}>
        {
          ({ loading, error, data }) => {
            if (loading) return 'loading...'
            if (error) return `${error.message}`
            return <div>{data.user.url}</div>
          }
        }
      </Query>
    </ApolloProvider>
  );
}

export default App;
