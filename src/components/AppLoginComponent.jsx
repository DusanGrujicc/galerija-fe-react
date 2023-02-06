import React from "react";

export default function AppLogin({ handleSubmit, user, setUser }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email: </label>
        <input
          required
          type="email"
          value={user.email}
          onChange={({ target }) => setUser({ ...user, email: target.value })}
        />
        <br />
        <br />
        <label>password: </label>
        <input
          required
          type="password"
          value={user.password}
          onChange={({ target }) =>
            setUser({ ...user, password: target.value })
          }
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
