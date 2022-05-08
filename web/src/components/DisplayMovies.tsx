import React from 'react';
import { gql, useQuery } from '@apollo/client';

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      name
      yearOfPublication
    }
  }
`;

function DisplayMovies() {
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);

  return (
    <div>
      {movieData &&
        movieData.movies.map((movie: any, i: number) => {
          return (
            <div key={i}>
              <h1>Name: {movie.name}</h1>
              <p>Published: {movie.yearOfPublication}</p>
            </div>
          );
        })}
    </div>
  );
}

export default DisplayMovies;
