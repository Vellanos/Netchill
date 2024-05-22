"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <div className="searchbar-container">
            <input
                className="searchbar-input"
                type="text"
                placeholder="Rechercher"
                value={query}
                onChange={handleInputChange}
            />
            <Link href={`/search/${encodeURIComponent(query)}`}>
                <button className="searchbar-button">
                    Rechercher
                </button>
            </Link>
        </div>
    );
};

export default SearchBar;