import { useTranslation } from 'react-i18next';
import HistoryRecord from 'components/person/HistoryRecord/HistoryRecord';
import { Experience } from 'utils/types';
import './ExperienceInfo.scss';

type ExperienceInfoProps = {
    experiences: Experience[]
};

/**
 * A component used to show the previous experience of a person. It uses a list of 
 * the common HistoryRecord component.
 */
const ExperienceInfo = ({ experiences }: ExperienceInfoProps) => {
    const { t } = useTranslation();

    let content = experiences.map(({ title, institution, startYear, endYear }, index) => {
        return <HistoryRecord title={institution} description={title} startYear={startYear} endYear={endYear} key={index} />
    });

    return (
        <section className='rk-experience-info'>
            <h5>{t('person.experience')}</h5>
            {content}
        </section>
    );
}

export default ExperienceInfo;