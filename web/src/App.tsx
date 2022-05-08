import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import DisplayData from './components/DisplayUsers';
import DisplayMovies from './components/DisplayMovies';
import DisplayMovie from './components/DisplayMovie';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
  });

  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <h1>List of Users</h1>
        <DisplayData />
        <h1>List of Movies</h1>
        <DisplayMovies />
        <DisplayMovie />
      </div>
    </ApolloProvider>
  );
}

export default App;
