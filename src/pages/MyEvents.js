import * as React from "react";
import {useAuth} from "../hooks/useAuth";

function MyEvents() {
  const { user } = useAuth();
  return <h1>You are in your events page - {user && user.email}.</h1>;
}

export default MyEvents;
