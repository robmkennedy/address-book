import { configureStore } from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';
import { personApiSlice } from './slices/personApiSlice';


// The root reducer for the store.
const rootReducer = {
    app: appSlice.reducer,
    [personApiSlice.reducerPath]: personApiSlice.reducer
};

/**
 * Setup the redux store. This automatically sets up the redux thunk middleware. We also add
 * the middleware for querying the movie API and querying the about markdown file.
 */
const store = configureStore({
    reducer: rootReducer,
    // preloadedState: {  },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([personApiSlice.middleware])
});

// Infer the `RootState` type from the store itself. The inferred RootState type is based on the root reducer.
export type RootState = ReturnType<typeof store.getState>;

// Infer the type of the dispatch function. Call this AppDispatch as recommended by redux toolkit.
export type AppDispatch = typeof store.dispatch;

export default store;