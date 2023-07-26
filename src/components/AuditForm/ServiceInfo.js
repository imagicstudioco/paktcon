import React from "react";

function ServiceInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <strong>What services do you expose to the internet?  (Examples: Web, Database, FTP, SSH, etc.)</strong>
      <input
        type="text"
        placeholder=""
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <strong>What services do you expose to the campus? </strong>
      <input
        type="text"
        placeholder=""
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <strong>What type of authentication do you use for your web services? (Examples: PubCookie, Windows Integrated, htaccess, etc.)</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>What languages do you use for your web services? (Examples: PHP, Perl, Ruby, ASP, etc.)</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>What antivirus application(s) do you use?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
        <strong>Is your antivirus application implemented using a “managed” client/server architecture, or in a stand-alone configuration?</strong> 
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

export default ServiceInfo;
