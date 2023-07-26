import React from "react";

function SystemInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <strong>How many Microsoft Windows NT/2000/2003 servers does your organization use?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <strong>How many Unix servers (AIX, HPUX, Linux, Solaris, etc.) does your organization use?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <strong>Please list specific distributions.</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />  
      <strong>List any servers with operating systems other than what is listed above.</strong>
       <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   
      <strong>Please include quantities and list specific operating system versions/distributions.</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   
      <strong>How many Microsoft Windows 2000/XP Professional clients does your organization use?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   
      <strong>List any clients with operating systems other than what is listed above.</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   
      <strong>Please include quantities and list specific operating system versions/distributions.</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   
      <strong>What Enterprise Resource Planning (ERP) application(s) does your organization use? (Examples – SAP, Peoplesoft, Oracle, JD Edwards)</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   
      <strong>Please include a brief description of each.</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>What E-commerce application(s) does your organization use?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   
      <strong>Please include a brief description of each.</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   
      <strong>What database technologies does your organization use? (Examples – Oracle, Microsoft SQL, IBM DB2, MySQL).</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   
      <strong>Please include a brief description of the purpose for each.</strong>
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

export default SystemInfo;
