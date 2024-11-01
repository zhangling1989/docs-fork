'use client'

import { useState } from 'react'

interface CopyButtonProps {
  text: string;
  className?: string;
}

export default function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`ml-2 px-2 py-0.5 text-xs rounded transition-colors ${
        copied
          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
          : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400'
      } ${className}`}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}
