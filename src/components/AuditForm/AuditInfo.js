import React from "react";

function AuditInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
     
    <strong> Would you like the Information Security Office to perform a network-based assessment? (A&P)</strong>
      <input
        type="text"
        placeholder=""
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <strong>How many Internet-facing hosts do you want the Information Security Office to assess?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <strong>Would you like the Information Security Office to perform a host-based assessment?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Which hosts?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Would you like the Information Security Office to perform compliance, physical or enterprise assessment?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>If compliance, which regulations? (HIPAA, FERPA, etc.)</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Would you like the Information Security Office to perform an application security assessment?</strong>

       <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Which specific applications? (URL, Application name, Installer, etc.)</strong>

       <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Would you like this tested with or without credentials?</strong>

       <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Would you like this tested with or without administrative credentials?</strong>
      
       <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
}

export default AuditInfo;
