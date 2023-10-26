import { Person } from 'utils/types';
import ProfileImage from 'components/person/ProfileImage/ProfileImage';
import './ContactInfo.scss';

type ContactInfoProps = {
    person: Person
};

/**
 * A component used to show a persons contact information and profile image.
 */
const ContactInfo = ({ person }: ContactInfoProps) => {

    return (
        <section className='rk-contact-info'>
            <div>
                <ProfileImage image={person.image} />
            </div>
            <div>
                <h3 className='rk-contact-name'>{person.name}</h3>
                <div className='rk-contact-company'>{person.company}</div>
                <div className='rk-contact-phone'>{person.phone}</div>
                <div className='rk-contact-email'><a href={`mailto:${person.email}`}>{person.email}</a></div>
            </div>
        </section>
    );
}

export default ContactInfo;