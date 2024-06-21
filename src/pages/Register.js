import * as React from "react";
import { BaseService } from '../services/BaseService';

function Register() {
  const email = React.useRef("");
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

    try {
      const response = await BaseService.post(`/sign_up`, data, true)
      if (response.ok) {
        // setUser(response);
        // redirect to events page
      }
    } catch (error) {
      // Handle error
      // log error to the browser as failure notice
      console.log(error);
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
