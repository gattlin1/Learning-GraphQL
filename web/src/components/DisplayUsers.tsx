import { gql, useQuery } from '@apollo/client';
import React from 'react';

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      username
      age
      nationality
    }
  }
`;

function DisplayUsers() {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);

  if (loading) {
    return <h1>Data is Loading...</h1>;
  }
  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }
  return (
    <div>
      {data &&
        data.users.map((user: any, i: number) => {
          return (
            <div key={i}>
              <h1>Name: {user.name}</h1>
              <p>Username: {user.username}</p>
              <p>Age: {user.age}</p>
              <p>Nationality: {user.nationality}</p>
            </div>
          );
        })}
    </div>
  );
}

export default DisplayUsers;
