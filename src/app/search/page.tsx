'use client';

import Header from '@/components/Header';
import { useEffect, useState } from 'react';

export default function SearchPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading state
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="--syte-filter-search w-full"></div>
      </div>
    </>
  );
} 