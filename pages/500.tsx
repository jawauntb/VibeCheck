// pages/500.tsx
import React from 'react';
import Link from 'next/link';

const Custom500: React.FC = () => {
  return (
    <div>
      <h1>500 - Internal Server Error</h1>
      <Link href="/">
        <a>Go back to the homepage</a>
      </Link>
    </div>
  );
};

export default Custom500;
