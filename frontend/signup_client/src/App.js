import axios from 'axios';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
      email,
    };

    axios.post('http://localhost:8000/users', userData).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <h1> Submit</h1>
      <form onSubmit={handleSubmit}>
        <p>username</p>
        <input
          required
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>

        <p>password</p>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>

        <p>email</p>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>

        <button type="submit">Submit </button>
      </form>
    </div>
  );
}

export default App;