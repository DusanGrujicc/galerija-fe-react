import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login=()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation of the form data here
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    // Redirect the user to the main page if the login was successful
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;