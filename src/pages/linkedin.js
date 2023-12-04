
import React, { useEffect } from "react";

const Linkedin = () => {
  useEffect(() => {
    window.location.href = "https://www.linkedin.com/company/pakt-consulting/about/";
  }, []);

  return <div>Redirecting...</div>;
};

export default Linkedin;
