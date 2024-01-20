import React, { useState } from 'react';
import styles from './serachbar.module.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className={styles['search-bar-container']}>
            <input
                className={styles['input-field']}
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
            />
            <button className={styles['search-button']} onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
