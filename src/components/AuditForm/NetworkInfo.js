import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <strong>Has your organization ever been compromised (internally or externally)?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <strong>List all IP address blocks registered to your organization. (Example – 12.34.56.x/24)</strong>
      <input
        type="text"
        placeholder=""
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <strong>List all the domain names registered to your organization. (Examples – acme.com; acmesales.com)</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Does your organization use a local Firewall(s)?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>If so, please list quantity and manufacturer(s) of firewall(s).</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Does your organization use a local Intrusion Detection System(s) (IDS)?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Does your organization use a local Intrusion Prevention System(s) (IPS)?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>If your organization uses local IDS, do you use “host-based” IDS (HIDS) or “network-based” IDS (NIDS) or a combination of both?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>List the quantity of IDS (both HIDS and NIDS) and IPS devices, as well as the manufacturer(s).</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Do you use DMZ networks?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Does your organization have any dedicated connections to other organization’s networks (vendors, business partners)?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>If so, please list all dedicated connections to other networks.</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Does your organization use any Remote Access services?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Specifically, what type of remote access services does your organization use (VPN or Dial-Up RAS)?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>How many employees use remote access services?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Does your organization use site-to-site Virtual Private Network (VPN) tunnels?  If so, how many site-to-site VPN tunnels are in use?</strong>
      <input
        type="text"
        placeholder=""
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <strong>Does your organization have any systems that use modems?</strong>
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

export default OtherInfo;
