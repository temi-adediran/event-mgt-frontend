import { useState, useEffect } from "react";
// import { AUTH_TOKEN_COOKIE } from "../constants/Auth";

export const useCookie = (cookieName) => {
  const [cookieValue, setCookieValue] = useState("");

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${cookieName}=`));

    setCookieValue(cookie ? cookie.split("=")[1] : "");
  }, [cookieName]);

  const setCookie = (value, expirationDate) => {
    document.cookie = `${cookieName}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  };

  const deleteCookie = () => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };

  return [cookieValue, setCookie, deleteCookie];
};

// const [authToken, setAuthToken, deleteAuthToken] = useCookie(AUTH_TOKEN_COOKIE);

// export const { authToken, setAuthToken, deleteAuthToken };

// export const [authToken, setAuthToken, deleteAuthToken] = useCookie();
