import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetPeopleQuery } from 'state/slices/personApiSlice';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import ListPanel from 'components/layout/ListPanel/ListPanel';
import PersonPanel from 'components/layout/PersonPanel/PersonPanel';
import './MainPanel.scss';

/**
 * This is the main area of the application displayed beneath the header.
 * When the app loads for the first time, a query request is made to fetch the Person data.
 * As this is an async call, we must accommodate the loading and error states.  
 */
const MainPanel = () => {
    const { t } = useTranslation();

    const { data, error, isLoading } = useGetPeopleQuery('');

    let content = null;

    if (isLoading) {
        content = <LoadingBox message={t('people.loading')} />
    }
    else if (error) {
        content = <ErrorBox message={t('people.loading.error')} />
    }
    else if (data) {
        const { people } = data;
        content = (
            <Fragment>
                <ListPanel people={people} />
                <PersonPanel />
            </Fragment>
        );
    }

    return (
        <main id='mainPanel'>
            {content}
        </main>
    );
}

export default MainPanel;
