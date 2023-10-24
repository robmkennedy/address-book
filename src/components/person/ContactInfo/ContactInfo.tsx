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
                <div className='rk-contact-name'>{person.firstName}</div>
                <div className='rk-contact-company'>{person.company}</div>
                <div className='rk-contact-phone'>{person.phone}</div>
                <div className='rk-contact-email'>{person.email}</div>
            </div>
        </section>
    );
}

export default ContactInfo;