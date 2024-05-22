'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const SearchBar = () => {
  const [find, setfind] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setfind(event.target.value);
  };

  const hasLetterOrDigit = (input: string) => {
    const regex = /[a-zA-Z0-9]/;
    return regex.test(input);
  };

  return (
    <div className="searchbar-container">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Rechercher"
        value={find}
        onChange={handleInputChange}
      />
      {hasLetterOrDigit(find) && (
        <Link href={`/search/${encodeURIComponent(find)}`}>
          <button className="searchbar-button">
            Rechercher
          </button>
        </Link>
      )}
      {!hasLetterOrDigit(find) && (
        <button className="searchbar-button" disabled>
          Rechercher
        </button>
      )}
    </div>
  );
};

export default SearchBar;
