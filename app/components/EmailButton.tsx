"use client"
import React, { useState } from 'react'

const EmailButton = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = async () => {
    const email = 'pierrepbaptiste@gmail.com'; 

    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }

    // Resets the "Copied" status after a brief delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div>
    <button 
    className="border-b-2 border-accent hover:text-accent transition duration-[400] pb-[10px] uppercase text-base font-bold leading-[1.625rem] tracking-[2.286px]"
    onClick={handleCopyClick}>
      {isCopied ? 'Email Copied!' : 'Copy Email'}
    </button>
  </div>
  )
}

export default EmailButton