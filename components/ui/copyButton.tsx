"use client"
import React from 'react';

const CopyButton = () => {
  const handleCopy = () => {
    // The string you want to copy to the clipboard
    const textToCopy = "shashikiran123@gmail.com";
    
    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Email Copied'); // Optional: Alert the user that text was copied
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <button
      onClick={handleCopy}
      className="relative inline-flex w-36 h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Book Now
      </span>
    </button>
  );
};

export default CopyButton;
