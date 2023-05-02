// components/Header.tsx (or your main navigation component)

import Link from 'next/link';

export default function Header() {
  return (
    <header>
      {/* Other navigation links */}
      <Link href="/feed">
        <a className="text-lg font-semibold">Feed</a>
      </Link>
    </header>
  );
}
