// pages/404.tsx
import React from 'react';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back to the homepage</a>
      </Link>
    </div>
  );
};

export default Custom404;
