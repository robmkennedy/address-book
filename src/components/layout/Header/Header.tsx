import { useTranslation } from 'react-i18next';
import SearchBar from 'components/common/SearchBar/SearchBar';
import { useAppDispatch } from 'hooks/stateHooks';
import { stringSearched } from 'state/slices/appSlice';
import './Header.scss';

/**
 * The header of the entire application. It utilizes the NAvbar that is provided 
 * by react-bootstrap. This handled responsiveness and collapsing the nav menu in mobile view.
 * Each link in the header is a NavLink, which uses react-router NavLinks 
 * to route to the correct page.
 */
const Header = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const handleSearch = (searchString: string) => {
        dispatch(stringSearched(searchString));
    };

    return (
        <header id='header'>
            <nav className='navbar navbar-expand bg-body-tertiary'>
                <div className='container'>
                    <div className='navbar-brand'>
                        <img alt='logo' src='book.svg' />
                        {t('app.title')}
                    </div>
                    <SearchBar onSearch={handleSearch} />
                </div>
            </nav>
        </header>
    );
};

export default Header;
