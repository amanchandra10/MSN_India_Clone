import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location]);
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignitems: "center",
          justifycontent: "center",
        }}
      >
        <h1 className="redirect"> Redirecting to you in {count} second </h1>
        
      </div>
    </>
  );
};

export default Spinner;
