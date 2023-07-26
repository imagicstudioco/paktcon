import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <strong>Full Name</strong>
      <input
        type="text"
        placeholder=""
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <strong>Name Of Company</strong>
      <input
        type="text"
        placeholder=""
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
      <strong>Job Title</strong>
      <input
        type="text"
        placeholder=""
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
      <strong>Email Address</strong>
      <input
        type="text"
        placeholder=""
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
      <strong>Contact Phone Number</strong>
      <input
        type="text"
        placeholder=""
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
      <strong>Address</strong>
      <input
        type="text"
        placeholder=""
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
      <strong>Address Line 2(Optional)</strong>
      <input
        type="text"
        placeholder=""
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
      <strong>Town/City</strong>
      <input
        type="text"
        placeholder=""
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
      <strong>County</strong>
      <input
        type="text"
        placeholder=""
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
      <strong>Postcode</strong>
      <input
        type="text"
        placeholder=""
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />

    </div>
  );
}

export default SignUpInfo;
