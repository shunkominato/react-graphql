import { useState } from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import client from './client'
import { ME, SERCH_REPO } from './graphql'

const initialState = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンドエンジニア"
}
function App() {
  
  const [serchQuery, setSerchQuery] = useState(initialState)
  const {first, after, last, before, query} = serchQuery
  const handleChange = (event) => {
    console.log(event.target.value)
    console.log(serchQuery)
    setSerchQuery({...serchQuery, query: event.target.value})
  }
  const handleSubmit = (aa) => {
    console.log(aa)
  }
  return (
    <ApolloProvider client={client}>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={handleChange} />
      </form>
      <div >
        a
      </div>
      <Query query={SERCH_REPO} variables={{first, after, last, before, query}}>
        {
          ({ loading, error, data }) => {
            if (loading) return 'loading...'
            if (error) return `${error.message}`
            console.log(data)
            return (
              <>
                <h2>GITHub Repository {data.search.repositoryCount}</h2>
                <ul>
                  {data.search.edges.map((edge) => {
                    return (
                      <li key={edge.node.id}>
                        <a href={edge.node.url} target='_blank'>{edge.node.name}</a>
                      </li>
                    )
                  })}
                </ul>
              </>
            )
          }
        }
      </Query>
    </ApolloProvider>
  );
}

export default App;
