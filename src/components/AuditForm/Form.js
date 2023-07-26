import React, { useState } from "react";
import './css/Form.css'
import BasicInfo from "./BasicInfo";
import SystemInfo from "./SystemInfo";
import NetworkInfo from "./NetworkInfo";
import ServiceInfo from "./ServiceInfo";
import AuditInfo from "./AuditInfo"

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Basic Information", "System Information", "Network Information", "Service Information", "Audit Information"];

  const PageDisplay = () => {
    if (page === 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SystemInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <NetworkInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <ServiceInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <AuditInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "20%" : page === 1 ? "40%" : page === 2 ? "60%" : page === 3 ? "80%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
