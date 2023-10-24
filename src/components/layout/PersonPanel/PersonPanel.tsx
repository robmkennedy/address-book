import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelectedPersonSelector } from 'hooks/selectorHooks';
import MessageBox from 'components/common/MessageBox/MessageBox';
import ContactInfo from 'components/person/ContactInfo/ContactInfo';
import EducationInfo from 'components/person/EducationInfo/EducationInfo';
import ExperienceInfo from 'components/person/ExperienceInfo/ExperienceInfo';
import './PersonPanel.scss';

/**
 * A component used to show a the details of a person in the main section of the app.
 * This will listen to changes in the redux store if anyone selects a person from the
 * navigation list on the left. If no person is selected, a default message is shown.
 */
const PersonPanel = () => {
    const { t } = useTranslation();

    let content = <MessageBox message={t('no.person.selected')} />;

    const selectedPerson = useSelectedPersonSelector();

    if (selectedPerson) {
        content = (
            <Fragment>
                <ContactInfo person={selectedPerson} />
                <EducationInfo educations={selectedPerson.education} />
                <ExperienceInfo experiences={selectedPerson.experience} />
            </Fragment>
        );
    }

    return (
        <section className='rk-person-panel'>
            {content}
        </section>
    );
}

export default PersonPanel;