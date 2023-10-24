import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type SearchBarProps = {
    onSearch: Function
};

/**
 * An input group component used to provide a search bar for the user. The onSearch property
 * is an event handler that is called with the string search value when the Search button
 * is clicked.
 */
const SearchBar = ({ onSearch }: SearchBarProps) => {
    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        onSearch(inputValue);
    };

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(inputValue);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div className='rk-search-bar d-flex'>
            <input className='form-control me-2' type='search' onKeyUp={handleKeyUp} onChange={handleChange} placeholder={t('header.search.placeholder')} aria-label='Search' />
            <button className='btn btn-outline-success' type='submit' onClick={handleClick}>{t('header.search')}</button>
        </div>
    );
};

export default SearchBar;