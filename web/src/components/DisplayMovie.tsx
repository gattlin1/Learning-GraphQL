import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const QUERY_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      yearOfPublication
    }
  }
`;

function DisplayMovie() {
  const [movieSearched, setMovieSearched] = useState('');
  const [fetchMovie, { data, error }] = useLazyQuery(QUERY_MOVIE_BY_NAME);

  const handleFetchMovie = () => {
    fetchMovie({ variables: { name: movieSearched } });
  };

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Interstellar...'
        onChange={(e) => {
          setMovieSearched(e.target.value);
        }}
      />
      <button onClick={handleFetchMovie}>Fetch Movie</button>
      <div>
        {data && (
          <div>
            <h1>MovieName: {data.movie && data.movie.name}</h1>
            <h1>
              Year Of Publication: {data.movie && data.movie.yearOfPublication}
            </h1>{' '}
          </div>
        )}
        {error && <div>There was an error</div>}
      </div>
    </div>
  );
}

export default DisplayMovie;
