import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Has your organization ever been compromised (internally or externally)?"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="List all IP address blocks registered to your organization. (Example – 12.34.56.x/24)"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="List all the domain names registered to your organization. (Examples – acme.com; acmesales.com)"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Does your organization use a local Firewall(s)?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="If so, please list quantity and manufacturer(s) of firewall(s)."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Does your organization use a local Intrusion Detection System(s) (IDS)?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Does your organization use a local Intrusion Prevention System(s) (IPS)?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="If your organization uses local IDS, do you use “host-based” IDS (HIDS) or “network-based” IDS (NIDS) or a combination of both?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="List the quantity of IDS (both HIDS and NIDS) and IPS devices, as well as the manufacturer(s)."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Do you use DMZ networks?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Does your organization have any dedicated connections to other organization’s networks (vendors, business partners)?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="If so, please list all dedicated connections to other networks."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Does your organization use any Remote Access services?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Specifically, what type of remote access services does your organization use (VPN or Dial-Up RAS)?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="How many employees use remote access services?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Does your organization use site-to-site Virtual Private Network (VPN) tunnels?  If so, how many site-to-site VPN tunnels are in use?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Does your organization have any systems that use modems?"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
}

export default OtherInfo;
