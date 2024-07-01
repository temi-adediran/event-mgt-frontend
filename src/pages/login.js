import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const email = React.useRef("");
  const { login } = useAuth();

  useEffect(() => {
    email.current.focus();
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    if (data.email !== "" && data.password !== "") {
      login(data, `/sign_in`);
      return;
    } else {
      alert("please provide a valid input");
      // add form error message
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
