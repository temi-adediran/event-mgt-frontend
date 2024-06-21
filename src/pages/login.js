import * as React from "react";
import { BaseService } from '../services/BaseService';
import { useState, useEffect } from "react";

function Login() {
  const email = React.useRef("");
  const [user, setUser] = useState({});

  useEffect(() => {
    email.current.focus();
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await BaseService.post(`/sign_in`, data, true)
      if (response.ok) {
        setUser(response);
        // redirect to events page
        // store user in state
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label htmlFor="email">Email Address</label>
        <input ref={email} id="email" name="email" type="email" placeholder="Enter your email" />
        <br /><br />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Enter your password" />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
