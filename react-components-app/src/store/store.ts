import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formCardReducer from './formCardSlice';
import { charactersApi } from '../api/charactersApi';

const rootReducer = combineReducers({
  searchReducer,
  formCardReducer,
  [charactersApi.reducerPath]: charactersApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
