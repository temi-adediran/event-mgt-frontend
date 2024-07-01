import React, { useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_TOKEN_COOKIE, AUTH_STORAGE_KEY } from "../constants/Auth";
import { BaseService } from '../services/BaseService';
import Cookies from 'universal-cookie';

const AuthContext = createContext();
const cookies = new Cookies(null, { path: "/", domain: process.env.REACT_APP_CLIENT_URL } );

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(null);
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem(AUTH_STORAGE_KEY);

  useEffect(() => {
    if(loggedInUser !== null) setIsAuthenticated(true)
  }, [loggedInUser]);

  const login = async (data, route) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await BaseService.post(route, data, true)
      // dispatch("login")
      setUser(response);
      setIsAuthenticated(true);
      setError(null);
      setIsLoading(false);
      localStorage.setItem(AUTH_STORAGE_KEY, response.email);
      navigate("/my-events");
      console.log("logged in");
    } catch (error) {
      // Add error to flash
      setError(error.message)
      setIsLoading(false)
      // console.log(error);
    }
  }

  const logout = async (e) => {
    // dispatch("loading")
    setIsLoading(true)
    setError(null)

    try {
      const response = await BaseService.get(`/logout`);
      console.log(response);
      if (response.message) {
        cookies.remove(AUTH_TOKEN_COOKIE, { path: "/", domain: process.env.REACT_APP_CLIENT_DOMAIN });
        localStorage.removeItem(AUTH_STORAGE_KEY);
        setUser(null);
        setIsAuthenticated(false);
        setIsLoading(false);
        setError(null);
        navigate("/login");
      }
      // dispatch("logout")
    } catch (error) {
      // dispatch("error")
      setIsLoading(false)
      setError(error.message)
      console.log(error);
    }
  }

  console.log(`user: ${user}`, `authenticated: ${isAuthenticated}`, `loading: ${isLoading}`);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
