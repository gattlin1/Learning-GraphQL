import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';

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

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      id
    }
  }
`;

function DisplayUsers() {
  const { data, loading, refetch } = useQuery(QUERY_ALL_USERS);
  const [createUser, { data: createUserData }] = useMutation(CREATE_USER);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState('');

  const handleCreateUser = () => {
    createUser({
      variables: {
        input: {
          name,
          username,
          age,
          nationality,
        },
      },
    });
    refetch();
  };

  if (loading) {
    return <h1>Data is Loading...</h1>;
  }
  return (
    <div>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Name...'
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          type='text'
          placeholder='Username...'
        />
        <input
          onChange={(e) => setAge(Number(e.target.value))}
          type='number'
          placeholder='Age...'
        />
        <input
          onChange={(e) => setNationality(e.target.value.toUpperCase())}
          type='text'
          placeholder='Nationality...'
        />
        <button onClick={handleCreateUser}>Create User</button>
      </div>
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
