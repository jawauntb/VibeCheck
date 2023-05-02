// components/Header.tsx (or your main navigation component)

import Link from 'next/link';

export default function Header() {
  return (
    <header>
      {/* Other navigation links */}
      <Link href="/">
        <span className="text-lg font-semibold">VibeCheck</span>
      </Link>
    </header>
  );
}
