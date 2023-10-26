import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import NavList from 'components/common/NavList/NavList';
import PersonItem from 'components/person/PersonItem/PersonItem';
import { personSelected } from 'state/slices/appSlice';
import { useAppDispatch } from 'hooks/stateHooks';
import { useSearchStringSelector, useSelectedPersonSelector } from 'hooks/selectorHooks';
import NavControl from 'components/common/NavControl/NavControl';
import { Person } from 'utils/types';
import './ListPanel.scss';

type ListPanelProps = {
    people: Person[]
};

/**
 * A component used to show the list of people. It uses the common NavList component
 * and provides name, sorting, and filtering functions. It will listen to state changes
 * for the search string and filter the people accordingly.
 */
const ListPanel = ({ people }: ListPanelProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const searchString = useSearchStringSelector();
    const selectedPerson = useSelectedPersonSelector();
    const [sortString, setSortString] = useState('asc');

    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortString(event.target.value);
    };

    const sortCallback = (personA: Person, personB: Person) => {
        const nameA = personA.name.toUpperCase();
        const nameB = personB.name.toUpperCase();
        if (nameA < nameB) {
            return (sortString === 'asc' ? -1 : 1);
        }
        if (nameA > nameB) {
            return (sortString === 'asc' ? 1 : -1);
        }
        return 0;
    }

    const filterCallback = (person: Person) => {
        return person.name.toUpperCase().includes(searchString.toUpperCase());
    }

    const categoryCallback = (person: Person) => {
        return person.name.slice(0, 1).toUpperCase();
    }

    const renderItem = (person: Person) => {
        return <PersonItem person={person} />
    }

    const handleSelect = (person: Person) => {
        dispatch(personSelected(person));
    }

    return (
        <section className='rk-list-panel'>
            <NavControl sortString={sortString} onSortChange={handleSortChange} />
            <NavList items={people}
                selectedItem={selectedPerson}
                category={categoryCallback}
                filter={filterCallback}
                sort={sortCallback}
                render={renderItem}
                onSelect={handleSelect}
                emptyText={t('no.people.found')} />
        </section>
    );
}

export default ListPanel;

