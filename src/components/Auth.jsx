import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) navigate("/login");
    } catch (err) {
      navigate("/login");
    }
  }, []);
  return children;
}

export default Auth;
