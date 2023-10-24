import { useTranslation } from 'react-i18next';


import { Education } from 'utils/types';
import HistoryRecord from 'components/person/HistoryRecord/HistoryRecord';
import './EducationInfo.scss';

type EducationInfoProps = {
    educations: Education[]
};

/**
 * A component used to show the previous education of a person. It uses a list of 
 * the common HistoryRecord component.
 */
const EducationInfo = ({ educations }: EducationInfoProps) => {
    const { t } = useTranslation();

    let content = educations.map(({ degree, institution, startYear, endYear }, index) => {
        return <HistoryRecord title={institution} description={degree} startYear={startYear} endYear={endYear} key={index} />
    });

    return (
        <section className='rk-education-info'>
            {content}
        </section>
    );
}

export default EducationInfo;