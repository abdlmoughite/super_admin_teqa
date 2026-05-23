// src/router/PrivateRoute.jsx
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  if (!user) {
    window.location.href = "https://teqaconnect.com/login";
    return null;
  }

  return children;
}