
import React, { useEffect } from "react";

const Twitter = () => {
  useEffect(() => {
    window.location.href = "https://twitter.com/";
  }, []);

  return <div>Redirecting...</div>;
};

export default Twitter;
