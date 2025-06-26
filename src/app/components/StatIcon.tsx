import * as React from "react";

export function StatBriefcase({ className = "", size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="10" width="24" height="14" rx="3" fill="#fff" stroke="#2563eb" strokeWidth="2"/>
      <rect x="10" y="7" width="12" height="6" rx="2" fill="#2563eb"/>
    </svg>
  );
}

export function StatArrowUp({ className = "", size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 24V8M16 8L10 14M16 8L22 14" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function StatLocation({ className = "", size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="16" cy="14" r="6" stroke="#2563eb" strokeWidth="2" fill="#fff"/>
      <path d="M16 28C16 28 26 20 26 14C26 8.47715 21.5228 4 16 4C10.4772 4 6 8.47715 6 14C6 20 16 28 16 28Z" stroke="#2563eb" strokeWidth="2" fill="#fff"/>
    </svg>
  );
}
