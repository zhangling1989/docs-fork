'use client'

import CopyButton from './CopyButton'

interface CopyableCodeProps {
  code: string;
  display?: string;
  className?: string;
}

export default function CopyableCode({ code, display, className = '' }: CopyableCodeProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <code className="bg-magic-semi-deep-purple/15 text-magic-purple dark:text-magic-white text-sm rounded-md px-2 py-0.5">
        {display || code}
      </code>
      <CopyButton text={code} />
    </span>
  );
}
