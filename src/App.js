import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Loading from "./components/Loading";
import AuthProvider from "./hooks/useAuth";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";

const Home = React.lazy(() => import("./pages/Home"));
const MyEvents = React.lazy(() => import("./pages/MyEvents"));
const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navigation />

          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/my-events" element={<MyEvents />} />
              </Route>

              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </React.Suspense>

        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
