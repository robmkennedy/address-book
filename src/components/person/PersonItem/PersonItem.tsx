import { Person } from 'utils/types';
import './PersonItem.scss';

type PersonItemProps = {
    person: Person
};

/**
 * A component used to render a person in the nav list on the left of the application.
 */
const PersonItem = ({ person }: PersonItemProps) => {
    
    return (
        <div className='rk-person-item'>{person.lastName}</div>
    );
}

export default PersonItem;