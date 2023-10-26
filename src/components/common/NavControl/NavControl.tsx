import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import './NavControl.scss';

type NavControlProps = {
    sortString: string;
    onSortChange: (event: ChangeEvent<HTMLSelectElement>) => void
};

/**
 * A component used to display a selector for the sort direction.
 */
export default function NavControl({ sortString, onSortChange }: NavControlProps) {
    const { t } = useTranslation();

    return (
        <div className='rk-nav-control'>
            <select className="form-select" aria-label="Sort select" value={sortString} onChange={onSortChange}>
                <option value='asc' selected>{t('sort.ascending')}</option>
                <option value='des'>{t('sort.descending')}</option>
            </select>
        </div>
    );
}