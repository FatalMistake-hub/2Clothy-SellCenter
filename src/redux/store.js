// const intitState = {
//     users: [
//         { id: 1, name: 'John' },
//         { id: 2, name: 'Johny' },
//     ],
// };

// const rootReducer = (state = intitState, action) => {
//     return state;
// };

// export default rootReducer
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';


import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
//bo nhung cai can giu nguyen khi f5
const rootReducer = combineReducers({ auth: AuthSlice.reducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

export let persistor = persistStore(store);

