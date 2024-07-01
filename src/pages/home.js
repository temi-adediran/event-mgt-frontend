import * as React from "react";
import {useAuth} from "../hooks/useAuth";

function Home() {
  const { user } = useAuth();
  return <h1>You are on the home page.</h1>;
}

export default Home;
