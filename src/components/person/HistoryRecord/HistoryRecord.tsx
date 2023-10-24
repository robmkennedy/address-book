import { useTranslation } from 'react-i18next';
import './HistoryRecord.scss';

type HistoryRecordProps = {
    title: string
    description: string
    startYear: string
    endYear: string
};

/**
 * A component used to show a record of experience or education that occurred during a
 * certain date range.
 */
const HistoryRecord = ({ title, description, startYear, endYear }: HistoryRecordProps) => {
    const { t } = useTranslation();
    
    return (
        <div className='rk-history-record'>
            <h5>{title}</h5>
        </div>
    );
}

export default HistoryRecord;