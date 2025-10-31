import { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState<string | null>('');

  return (
    <div className="sticky top-0 z-10 mx-auto mb-10 w-full max-w-2xl">
      <div className="border-secondary bg-off-white focus-within:ring-primary flex items-center gap-2 rounded-full border-2 px-4 py-2 shadow-md shadow-black/20 transition focus-within:ring-2">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-secondary h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>

        {/* Input */}
        <input
          type="text"
          placeholder="Search users, reports, or IDs..."
          className="text-secondary w-full bg-transparent placeholder-gray-400 focus:outline-none"
        />

        {/* Button */}
        <button className="bg-primary font-heading hover:bg-secondary cursor-pointer rounded-full px-4 py-1 text-sm text-white transition">
          Search
        </button>
      </div>
    </div>
  );
}
