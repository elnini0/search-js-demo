'use client';

import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700">
            Store
          </Link>
          
          <div className="--syte-top-search cursor-pointer">
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
        </div>
      </div>
    </header>
  );
} 