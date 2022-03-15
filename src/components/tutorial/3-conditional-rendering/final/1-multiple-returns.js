import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user[0];
        setUser(login);
        setUsers(user);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error....</h1>
      </div>
    );
  }
  return (
    <div>
      {/*  <h1>{user}</h1> */}
      {users.map((user, indexKey) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <li key={id}>{login} {id}</li>
        )
      })}
    </div>
  );
};

export default MultipleReturns;
