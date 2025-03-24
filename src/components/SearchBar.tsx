'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="--syte-top-search cursor-pointer flex items-center" onClick={() => {}}>
      <span className="sr-only">Open search</span>
      <svg 
        aria-hidden="true" 
        fill="none" 
        focusable="false" 
        width="24" 
        className="header__nav-icon icon icon-search" 
        viewBox="0 0 24 24"
      >
        <path 
          d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeMiterlimit="10"
        />
        <path 
          d="M15.857 15.858 21 21.001" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeMiterlimit="10" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
} 