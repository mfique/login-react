import React, { useState } from 'react';
import "./login.css";

const Login = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = async (e:React.FormEvent) => {
  e.preventDefault();

  
  try {
    console.log('Sending login request...');
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
      },
      body:JSON.stringify({email, password}),
    });

    const data = await response.json();
    console.log('Login response:', data)
  } catch (error) {
    console.error('Error during login:', error)
  }
};

  return (
    <div className="container">
      <div className="logo">
        La vida loca<br></br>
        ❤️
      </div>
      <h2>Login</h2>
      <div id="loginMessage"></div>
      <form onSubmit={handleLogin} id="loginForm">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <a className="hop" href="forgot.html">
          Forgot password?
        </a>
        <br />
        <br />
        <p className="lanez">Don't have an account?</p>
        <a className="hop" href="signup.html">
          Register
        </a>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
