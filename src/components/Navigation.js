import { Link } from "react-router-dom";
import * as React from "react";
import {useAuth} from "../hooks/useAuth";

function Navigation() {
  const { logout, isAuthenticated } = useAuth();

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      {isAuthenticated && (
        <>
          <li>
            <Link to="/my-events">My Events</Link>
          </li>

          <li>
            <button onClick={logout} className="btn-submit">
              Log Out
            </button>
          </li>
        </>
        )
      }

      {!isAuthenticated && (
        <>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </ul>
  )
}

export default Navigation;
