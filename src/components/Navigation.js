import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/register">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/logout">Log Out.</Link>
      </li>
    </ul>
  )
}
