import React from "react";

function ServiceInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      What services do you expose to the internet?  (Examples: Web, Database, FTP, SSH, etc.)
      <input
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      What services do you expose to the campus? 
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      What type of authentication do you use for your web services? (Examples: PubCookie, Windows Integrated, htaccess, etc.)
      <input
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      What languages do you use for your web services? (Examples: PHP, Perl, Ruby, ASP, etc.)
      <input
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      What antivirus application(s) do you use?
      <input
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
        Is your antivirus application implemented using a “managed” client/server architecture, or in a stand-alone configuration? 
      <input
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />

    </div>
  );
}

export default ServiceInfo;
