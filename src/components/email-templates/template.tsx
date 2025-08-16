import React from "react";

interface EmailTemplateProps {
  fullname: string;
  phone?: string;
  message: string;
}

export const EmailTemplate = ({ fullname, phone, message }: EmailTemplateProps) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
      <h2>New Message from {fullname}</h2>
      {phone && <p><strong>Phone:</strong> {phone}</p>}
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  );
};