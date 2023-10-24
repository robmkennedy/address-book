import { useTranslation } from 'react-i18next';
import './ExperienceInfo.scss';
import { Experience } from 'utils/types';
import HistoryRecord from '../HistoryRecord/HistoryRecord';

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
            {content}
        </section>
    );
}

export default ExperienceInfo;