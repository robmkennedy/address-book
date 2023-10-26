import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'utils/types';

const initialAppState: AppState = {
    searchString: '',
    selectedPerson: undefined
};

/**
 * This portion of the state is used to control the layout of the app. For a simple
 * app such as this, the only requirement is to keep track of what person is selected
 * and the search string
 * */
const appSlice = createSlice({
    name: 'app',
    initialState: initialAppState,
    reducers: {
        stringSearched: (state, { payload }) => {
            state.searchString = payload;
        },
        personSelected: (state, { payload }) => {
            state.selectedPerson = payload;
        },
    }
});

// Redux actions automatically generated by redux toolkit based on the reducer names
export const { personSelected, stringSearched } = appSlice.actions;

export default appSlice;