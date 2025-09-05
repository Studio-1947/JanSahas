"use client";
import React from "react";

export default function PrivacyPage() {
  return (
    <div className="w-screen h-screen bg-transparent flex items-center justify-center">
      <iframe
        src="/policy.pdf"
        className="w-full h-full"
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
}
