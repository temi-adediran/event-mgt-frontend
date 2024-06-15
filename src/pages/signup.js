import * as React from "react";

function SignupForm() {
  const email = React.useRef("");
  const signup_url = process.env.REACT_APP_BACKEND + "/sign_up";

  React.useEffect(() => {
    email.current.focus();
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password-confirmation'),
    };

    try {
      const response = await fetch(`${signup_url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Handle success
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

export default SignupForm;
