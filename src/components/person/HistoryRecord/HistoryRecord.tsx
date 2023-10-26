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

    return (
        <div className='rk-history-record'>
            <div className='rk-history-years'>
                <h6>{startYear} - {endYear}</h6>
            </div>
            <div className='rk-history-info'>
                <h6>{title}</h6>
                <div>{description}</div>
            </div>
        </div>
    );
}

export default HistoryRecord;