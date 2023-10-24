import { useAppSelector } from 'hooks/stateHooks';

/** 
 * Select the search string from the app state slice
 */
export const useSearchStringSelector = () => {
    return useAppSelector((state) => state.app.searchString);
};

/** 
 * Select the selected person from the app state slice
 */
export const useSelectedPersonSelector = () => {
    return useAppSelector((state) => state.app.selectedPerson);
};