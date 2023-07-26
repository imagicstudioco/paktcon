import React from "react";

function SystemInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="How many Microsoft Windows NT/2000/2003 servers does your organization use?"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="How many Unix servers (AIX, HPUX, Linux, Solaris, etc.) does your organization use?"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Please list specific distributions."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   <input
        type="text"
        placeholder="List any servers with operating systems other than what is listed above."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   <input
        type="text"
        placeholder="Please include quantities and list specific operating system versions/distributions."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   <input
        type="text"
        placeholder="How many Microsoft Windows 2000/XP Professional clients does your organization use?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   <input
        type="text"
        placeholder="List any clients with operating systems other than what is listed above."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   <input
        type="text"
        placeholder="Please include quantities and list specific operating system versions/distributions."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   <input
        type="text"
        placeholder="What Enterprise Resource Planning (ERP) application(s) does your organization use? (Examples – SAP, Peoplesoft, Oracle, JD Edwards)"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   
<input
        type="text"
        placeholder="Please include a brief description of each."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />

      <input
        type="text"
        placeholder="What E-commerce application(s) does your organization use?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   <input
        type="text"
        placeholder="Please include a brief description of each."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   <input
        type="text"
        placeholder="What database technologies does your organization use? (Examples – Oracle, Microsoft SQL, IBM DB2, MySQL)."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   <input
        type="text"
        placeholder="Please include a brief description of the purpose for each."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />   
    </div>
  );
}

export default SystemInfo;
