import { useSearchStringSelector } from 'hooks/selectorHooks';
import NavList from 'components/common/NavList/NavList';
import { Person } from 'utils/types';
import { personSelected } from 'state/slices/appSlice';
import { useAppDispatch } from 'hooks/stateHooks';
import './ListPanel.scss';
import PersonItem from 'components/person/PersonItem/PersonItem';

type ListPanelProps = {
    people: Person[]
};

/**
 * A component used to show the list of people. It uses the common NavList component
 * and provides name, sorting, and filtering functions. It will listen to state changes
 * for the search string and filter the people accordingly.
 */
const ListPanel = ({ people }: ListPanelProps) => {
    const dispatch = useAppDispatch();
    const searchString = useSearchStringSelector();

    const sortCallback = (person: Person) => {
        return (person.lastName.includes(searchString) || person.firstName.includes(searchString));
    }

    const filterCallback = (person: Person) => {
        return (person.lastName.includes(searchString) || person.firstName.includes(searchString));
    }

    const renderItem = (person: Person) => {
        return <PersonItem person={person} />
    }

    const handleSelect = (person: Person) => {
        dispatch(personSelected(person));
    }

    return (
        <section className='rk-list-panel'>
            {/* <NavList items={people} filter={filterCallback} sort={sortCallback} /> */}
            <NavList items={people} render={renderItem} onSelect={handleSelect}/>
        </section>
    );
}

export default ListPanel;

