import {
    persistReducer,
    persistStore,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import { reducer as loadingReducer } from '@src/redux/toolkit/actions/loadingActions';
import { reducer as storageReducer } from '@src/redux/toolkit/actions/storageActions';
import { reducer as pokemonReducer } from '@src/redux/toolkit/actions/pokemonActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
    storageReducer: storageReducer,
    loadingReducer: loadingReducer,
    pokemonReducer: pokemonReducer,
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['storageReducer'],
    stateReconciler: autoMergeLevel2
};

export type RootState = ReturnType<typeof rootReducer>;
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),

});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
