import * as React from "react";
import { useAuth } from "../hooks/useAuth";

function Register() {
  const email = React.useRef("");
  const { login } = useAuth();

  React.useEffect(() => {
    email.current.focus();
  }, [])

  const handleSubmit = async(event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password-confirmation'),
    };

    if (data.email !== "" && data.password !== "") {
      login(data, `/sign_up`);
      return;
    } else {
      alert("please provide a valid input");
      // add form error message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        <label htmlFor="email">Email Address</label>
        <input ref={email} id="email" name="email" type="email" placeholder="Enter your email" />
        <br /><br />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Enter your password" />
        <br /><br />

        <label htmlFor="password-confirmation">Confirm Password</label>
        <input id="password-confirmation" name="password-confirmation" type="password" placeholder="Confirm password" />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
