import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Loading from "./components/Loading";
import AuthProvider from "./contexts/AuthProvider";
import Navigation from "./components/Navigation";

const Home = React.lazy(() => import("./pages/Home"));
const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />

          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Loading />} />
            </Routes>
          </React.Suspense>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
