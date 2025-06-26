import * as React from "react";

export default function JobBoardIcon({ className = "", size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="2" y="8" width="32" height="22" rx="4" fill="#2563eb"/>
      <rect x="8" y="6" width="20" height="6" rx="3" fill="#fff"/>
      <rect x="8" y="14" width="6" height="10" rx="2" fill="#fff"/>
      <rect x="22" y="14" width="6" height="10" rx="2" fill="#fff"/>
    </svg>
  );
}
